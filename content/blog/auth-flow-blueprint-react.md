---
title: "Auth Flow Blueprint — React 19 + Express + Firebase"
description: "A complete authentication blueprint for React 19 with RTK Query frontend and Express + Firebase Admin backend using secure session cookies."
date: "2025-06-10"
author: "Mxo Masuku"
categories: ["React", "Firebase", "Authentication", "Backend"]
featured: true
draft: false
---

This is Part 2 of my series on building secure Firebase apps. In Part 1, I focused on building a secure backend. Now, I'm tackling the next step — connecting the frontend to the backend, and making sure we fully leverage our backend flow and Firebase's secure session cookie structure without dropping the ball.

Think of it as a personal checklist for fast, headache-free development. It's a record of what works, what breaks, and what needs to be locked in so I don't end up stuck in "prompt hell" next time I do this.

---

**Goal:**  
Cookie-based authentication for a **React 19 + RTK Query** frontend and an **Express + Firebase Admin** backend.  
Works locally and in production without leaking tokens.

---

## 0) Moving Parts

```
Client (React 19)
  └─ RTK Query base (credentials: 'include')
  └─ /auth/login mutation -> POST email/password
  └─ /auth/me query -> reads session (httpOnly) cookie
  └─ Global 401 handler -> redirect to /login (store `from` in sessionStorage)

Server (Express 5)
  └─ POST /auth/login -> Firebase Auth -> idToken -> createSessionCookie -> Set-Cookie
  └─ GET  /auth/me    -> verifySessionCookie -> return user
  └─ POST /auth/logout-> clearCookie('session')
  └─ verifySessionCookie middleware guards protected routes
```

---

## 1) Server: Minimal Endpoints

```ts
// login
const { idToken } = await signInWithEmailAndPassword(email, password);
const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn: 5 * 24 * 60 * 60 * 1000 });
res.cookie('session', sessionCookie, {
  httpOnly: true,
  secure: isProd || sameSite === 'none',
  sameSite, // 'lax' (same-site) or 'none' (cross-site, requires HTTPS)
  maxAge: 5 * 24 * 60 * 60 * 1000,
  path: '/',
});
return res.status(200).json({ message: 'Login successful', user: decodedUser });

// me
const cookie = req.cookies?.session;
if (!cookie) return res.status(401).json({ error: 'Unauthorized' });
const decoded = await admin.auth().verifySessionCookie(cookie, true);
return res.status(200).json({ user: pick(decoded, ['uid','email','name','picture']) });

// logout
res.clearCookie('session', { httpOnly: true, secure: isProd || sameSite==='none', sameSite, path: '/' });
res.status(200).json({ message: 'Logged out' });
```

**CORS (single mount):**

```ts
const ORIGINS = ['http://localhost:5173', process.env.FRONTEND_ORIGIN!].filter(Boolean);
app.use(cors({
  origin(origin, cb){ if(!origin) return cb(null,true); return ORIGINS.includes(origin) ? cb(null,true) : cb(new Error('CORS')); },
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
```

**Guard (use on protected routes):**

```ts
export async function verifySessionCookie(req,res,next){
  const c = req.cookies?.session;
  if(!c) return res.status(401).json({ error: 'Unauthorized' });
  try { (req as any).user = await admin.auth().verifySessionCookie(c, true); next(); }
  catch { return res.status(401).json({ error: 'Unauthorized or expired' }); }
}
```

---

## 2) Client: RTK Base + Auth Endpoints

```ts
// base (src/app/rtk.ts)
const raw = fetchBaseQuery({ baseUrl: API_BASE, credentials: 'include' });
const base = async (args, api, extra) => {
  const res = await raw(args, api, extra);
  if (res.error && (res.error as any).status === 401) {
    try { sessionStorage.setItem('postLoginRedirect', location.pathname + location.search); } catch {}
    location.replace('/login');
  }
  return res;
};
export const api = createApi({ reducerPath:'api', baseQuery: base, tagTypes:['Me'] });
```

```ts
// auth (src/features/auth/authSlice.ts)
export const authApi = api.injectEndpoints({
  endpoints: (b) => ({
    me: b.query<{user:any}, void>({ query: ()=>('/auth/me'), providesTags:['Me'] }),
    login: b.mutation<{message:string; user:any}, {email:string; password:string}>({
      query: (body)=>({ url:'/auth/login', method:'POST', body }), invalidatesTags:['Me']
    }),
    logout: b.mutation<{message:string}, void>({
      query: ()=>({ url:'/auth/logout', method:'POST' }), invalidatesTags:['Me']
    }),
  })
});
export const { useMeQuery, useLoginMutation, useLogoutMutation } = authApi;
```

**Login page redirect (sessionStorage):**

```ts
const stored = sessionStorage.getItem('postLoginRedirect');
let to = stored && stored.startsWith('/') ? stored : '/drivers';
sessionStorage.removeItem('postLoginRedirect');
navigate(to, { replace: true });
```

**Protected route wrapper:**

```tsx
function Protected({ children }:{children:React.ReactNode}){
  const { data, isLoading } = useMeQuery();
  if(isLoading) return <FullScreenSpinner/>;
  if(!data?.user) return <Navigate to="/login" replace/>;
  return <>{children}</>;
}
```

---

## 3) Env & Cookie Matrix

| Context         | Frontend Origin           | Backend Origin             | Cookie flags                     | Notes                         |
|-----------------|---------------------------|----------------------------|----------------------------------|-------------------------------|
| Dev (same-site) | http://localhost:5173     | http://localhost:5050      | `SameSite=lax`, `Secure=false`   | Easiest; or Vite proxy `/api` |
| Dev (cross-site)| http://localhost:5173     | https://localhost:5050     | `SameSite=none`, `Secure=true`   | Requires HTTPS in dev         |
| Prod (same-site)| https://app.example.com   | https://app.example.com    | `SameSite=lax`, `Secure=true`    |                               |
| Prod (cross-site)| https://app.example.com  | https://api.example.com    | `SameSite=none`, `Secure=true`   | Must enable HTTPS + CORS      |

> If deploying behind a proxy (Cloud Run/Nginx), add `app.set('trust proxy', 1)`.

---

## 4) Test Checklist (Do This Every Time)

- [ ] `POST /auth/login` returns **200** and sets `Set-Cookie: session=...; HttpOnly`
- [ ] Browser shows `session` cookie (Application tab), `Path=/`
- [ ] `GET /auth/me` immediately after login → **200** with `{ user }`
- [ ] Protected route returns **401** without cookie
- [ ] Frontend baseQuery has `credentials: 'include'`
- [ ] CORS allowlist exactly matches the frontend origin (no `*`)
- [ ] No tokens/idToken in **URL** or **JSON body** responses

---

## 5) Common Pitfalls (Fix Fast)

- **Cookie rejected:** cross-site + `SameSite=Lax` → use `SameSite=None; Secure; HTTPS`.
- **Still 401 after login:** cookie flags wrong, CORS mismatch, or forgot `credentials:'include'`.
- **Long login URL:** you're appending tokens/`from` to query; move it to `sessionStorage`.
- **Express 5 route crash:** no `*` in paths; avoid `app.options('*', ...)` → not allowed.

---

## 6) Minimal Vite Proxy (Makes Dev Same-Site)

```ts
// vite.config.ts
export default defineConfig({
  server: {
    host: 'localhost',
    port: 5173,
    proxy: { '/api': { target: 'http://localhost:5050', changeOrigin: true } }
  }
});
// client API_BASE = '/api'
```

---

## Takeaways

1. Implement `/auth/login`, `/auth/me`, `/auth/logout` first — everything else depends on them.
2. Configure CORS once, with credentials enabled.
3. Use RTK base query with a global 401 redirect to `/login`.
4. Guard protected pages with `<Protected/>`.
5. Test cookie + `/auth/me` before building any UI.
