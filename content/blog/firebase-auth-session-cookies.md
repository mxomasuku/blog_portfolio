---
title: "Testing Firebase Auth with Node.js and Emulators: Why You Need Server-Created Session Cookies"
description: "A guide on how to overcome Firebase client SDK limitations when testing a pure Node.js and Firebase backend."
date: "2025-06-04"
author: "Mxo Masuku"
categories: ["Node.js", "Firebase", "Security", "Backend"]
featured: false
draft: false
---

> A quick guide on how to overcome firebase client sdk limitations when testing a pure node and firebase backend

I wrote this article as a note to self. Everyone's obsessed with speed in app development — faster UIs, faster time to market, faster deployment. But backend speed only matters **if your foundation is stable**. And nothing breaks your backend more often — or more silently — than sloppy authentication logic.

So I went looking for a better way that I can reuse and trust as I build more Node.Js and Firebase backends.

### My goal was to:

- Build and test secure login *without* a frontend (acted as if the front doesn't even exist)
- Use Firebase Auth in **Node.js**, with **Emulators**, and no hacks
- Replace fragile 1-hour tokens with proper **session cookies**
- Design backend flows that are **secure, testable, and production-ready**

This is a step-by-step guide with a sample project, code, and deep dive into how session cookies solve real problems in Firebase auth workflows.

---

## The Problem: Firebase's Client SDK Doesn't Work on the Backend

Let's say you're building a dashboard or internal admin panel. Naturally, you want to:

- Accept an email/password login
- Log in the user from your backend
- Create a session you can trust

However, firebase's `signInWithEmailAndPassword()` **only exists in the frontend SDK** — it doesn't work in Node.js. That's a problem if you're trying to test your backend auth flows *before* the frontend is ready.

If you try to use signInWithEmailAndPassword on your api in postman you get an error like this:

```
email || !password) return res.status(400).json({ error: 'Missing credentials' });
Property 'idToken' does not exist on type 'unknown'.ts(2339)
```

---

## The Setup: Firebase Emulator + Axios

To mimic the frontend SDK, you must hit the **Firebase Auth REST API directly** — but only in emulator mode.

### Step 1: Enable Firebase Auth Emulator

Make sure you've started your emulator suite:

```bash
firebase emulators:start --only auth
```

### Step 2: Create `emulated-auth.ts`

Here's the file that does the magic:

```ts
// utils/emulated-auth.ts
import axios from 'axios';

export interface FirebaseAuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}

export async function signInWithEmailAndPassword(
  email: string,
  password: string
): Promise<FirebaseAuthResponse> {
  const FIREBASE_AUTH_EMULATOR_URL = process.env.FIREBASE_AUTH_EMULATOR_URL || 'http://127.0.0.1:9099';
  const API_KEY = 'dummy'; // works in emulator

  const url = `${FIREBASE_AUTH_EMULATOR_URL}/identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

  const response = await axios.post<FirebaseAuthResponse>(url, {
    email,
    password,
    returnSecureToken: true,
  });

  return response.data;
}
```

This is safe because you're using **localhost emulators**, not live Firebase.

---

## Problem: ID Tokens Expire in 1 Hour

The token returned by Firebase is short-lived — about 1 hour. It's designed for frontend use where the SDK auto-refreshes it. But on the server, you're not doing that.

You don't want to rely on storing refresh tokens or forcing re-auth every hour.

---

## Solution: Server-Created Session Cookies

This is where **Firebase Admin SDK** shines. You can turn the 1-hour token into a **secure, long-lasting cookie** that:

- Can last up to 5 days
- Is `httpOnly` (so XSS-safe)
- Is verified on the server
- Works great for SSR, admin tools, or traditional apps

### Here's how to do it:

```ts
// controllers/loginUser.ts
import { Request, Response } from 'express';
import { signInWithEmailAndPassword } from '../utils/emulated-auth';
const { admin } = require('../config/firebase');

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Missing credentials' });
  }

  try {
    const data = await signInWithEmailAndPassword(email, password);
    const idToken = data.idToken;

    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days

    const sessionCookie = await admin.auth().createSessionCookie(idToken, { expiresIn });

    res.cookie('session', sessionCookie, {
      maxAge: expiresIn,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    res.status(200).json({ message: 'Login successful' });
  } catch (err: any) {
    res.status(401).json({ error: err.message || 'Authentication failed' });
  }
};
```

---

## Quick Summary

- If you're using Firebase directly in the frontend → go with idToken.
- If you're building an Express backend and want real security → session cookies are non-negotiable.
- Don't store idToken in localStorage unless you're okay with the XSS risk.

---

## How to Test It (with Postman or Axios)

### 1. Send login request:

```http
POST http://localhost:3000/api/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "test123"
}
```

### 2. Cookie is now set:

You'll get a `Set-Cookie: session=...` header. Future requests just send that cookie.

---

## Bonus: Verifying the Session

Anywhere in your backend, you can now verify the session cookie like this:

```ts
const decodedClaims = await admin.auth().verifySessionCookie(sessionCookie, true);
```

Add this as a middleware to protect routes.

---

## Key Takeaways

- **Don't** rely on Firebase client SDK in your Node.js backend
- **Use Axios** to mimic login calls during testing
- **Create session cookies** for secure, persistent auth
- **Use emulators** to safely test everything without touching production

---

## Sample Repo 

Want a starter project with this exact setup? → [github.com/mxomasuku/firebase_patterns/firebase-auth-session-cookie-demo](#)

---

*Written by Mxolisi Masuku — full-stack dev, system designer, and slightly obsessed with fixing broken dashboards.*
