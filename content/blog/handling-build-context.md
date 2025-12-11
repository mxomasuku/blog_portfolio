---
title: "Handling BuildContext After Async Gaps in Flutter"
description: "Learn how to safely use BuildContext after async operations to avoid random crashes in Flutter apps."
date: "2025-01-29"
author: "Mxo Masuku"
categories: ["Flutter", "Best Practices"]
featured: false
draft: false
---

> After an await, context might be pointing to a widget that's already dead. Always check mounted before using it — especially when you're handling navigation, API results, or timed transitions.

---

## What I Learned

My target right now is to write Dart and Flutter code with **no linting errors or warnings**. Coming from React, I got very used to ignoring linter complaints — as long as the code ran, right?

But Flutter (and Dart's analyzer) is less forgiving. Today, I learned how to **eliminate** one specific warning:

```
Don't use 'BuildContext's across async gaps, guarded by an unrelated 'mounted' check.
Guard a 'State.context' use with a 'mounted' check on the State, and other BuildContext use with a 'mounted' check on the BuildContext.
```

---

## The Offending Code

```dart
class SplashPage extends StatefulWidget {
  const SplashPage({super.key});

  @override
  State<SplashPage> createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage> {
  @override
  void initState() {
    super.initState();
    redirect();
  }

  Future<void> redirect() async {
    await Future.delayed(const Duration(seconds: 2));

    // ❌ Not safe — may trigger use_build_context_synchronously
    if (context.mounted) {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (BuildContext context) => const GetStarted()),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return const Scaffold(
      body: Center(child: CircularProgressIndicator()),
    );
  }
}
```

---

## Why This Matters

Async gaps (like await) are the **backbone** of modern apps: server requests, delayed transitions, splash screen timers — all async. If you make a mistake here, you risk crashes that are:

- Random
- Rare
- Hard to reproduce

And that's the kind of bug that kills user trust.

---

## What's Really Going On?

When you await, your function is **paused**. During that pause, Flutter might dispose of the widget — like when the user navigates away (you know how impatient our users can be especially if there is bad network).

After the pause, if you use context, you're risking:

- Using a **stale BuildContext** that points to a destroyed widget
- Navigating or accessing UI from something that no longer exists

Even if you check context.mounted, it's still risky unless you're **absolutely sure** the context is the same one owned by the current State object.

---

## The Fix

If you're inside a State class, the correct and safest approach is to use mounted (from the State, not context).

```dart
Future<void> redirect() async {
  await Future.delayed(const Duration(seconds: 2));

  if (!mounted) return; // ✅ Safe and analyzer-approved

  Navigator.pushReplacement(
    context,
    MaterialPageRoute(builder: (_) => const GetStarted()),
  );
}
```

This guarantees:

- The widget is still in the tree
- The context is still valid
- No analyzer warning

---

## Short Summary

- Don't use context after an await unless you **check mounted**
- Prefer checking mounted (from State) instead of context.mounted
- Especially important for navigation and async UI logic
