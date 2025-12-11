---
title: "Intro To Simple Flutter State Management With Provider"
description: "A practical introduction to Flutter state management using Provider with ChangeNotifier, Consumer, and Selector patterns."
date: "2025-02-02"
author: "Mxo Masuku"
categories: ["Flutter", "State Management"]
featured: false
draft: false
---

> This log is a snapshot in time for my first encounter with Flutter State Management.

## What I Did

My Flutter app was getting messy. Routes were scattered, data like `email` and `username` were floating around without a central source of truth. My solution was to first build a **global shell** — a layout wrapper that manages navigation and global user data (borrowed from React Router & Context API in React). This structural change became the gateway to understanding **state management** in Flutter.

## Enter Provider

For low level Flutter widgets, most docs recommended Flutter's Provider package. 

I particularly liked the analogy ChatGPT gave me to understand the 3 core concepts in Provider:

- `ChangeNotifier` is the Mayor — keeps record of everything and everyone that's important, and has a `notifyListeners()`, an alarm which rings whenever something changes.

- `ChangeNotifierProvider` is the delivery service, the postman — it has coverage areas, and any widget/person you want to listen to a particular change from the ChangeNotifier must be wrapped inside the NotifierProvider.

- `Consumer` is the receiver, any widget/household which cares about said change and must react to it should be wrapped inside the Consumer.

### 1. ChangeNotifiers (Class)

* You define a class and extend `ChangeNotifier`.
* It acts as an **Observable**.
* Call `notifyListeners()` inside setters to propagate updates.

```dart
import 'package:flutter/material.dart';

class UserProvider with ChangeNotifier {
  String? _email;
  String? get email => _email;

  void updateEmail(String newEmail) {
    _email = newEmail;
    notifyListeners();
  }
}
```

### 2. ChangeNotifierProviders (Widget)

* This widget **injects** your `ChangeNotifier` into the widget tree.
* Should be placed high up (often in `main.dart`) so all children can access it.

```dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'user_provider.dart';
import 'my_app.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => UserProvider()),
      ],
      child: MyApp(),
    ),
  );
}
```

### 3. Consumers (Widget)

* Place as **deep** in the widget tree as possible — only where changes actually matter.
* Always use the generic: `Consumer<YourNotifier>()`
* Its builder gives you `(context, notifier, child)` — use `child` wisely to avoid unnecessary rebuilds.

```dart
Consumer<UserProvider>(
  builder: (context, userProvider, child) {
    return Text('Email: ${userProvider.email ?? "Not logged in"}');
  },
)
```

## Bonus Lessons (optimizing your app performance)

* You don't always need `Consumer`. For actions like clearing a cart, use `Provider.of<YourNotifier>(context, listen: false)` to invoke functions without triggering rebuilds.

Working on follow-up notes on the `Consumer` vs `context.watch` vs `context.read` vs  `Selector` debate. Knowing what to use and when. 

```dart
ElevatedButton(
  onPressed: () {
    Provider.of<UserProvider>(context, listen: false).updateEmail('');
  },
  child: Text('Clear Email'),
)
```

* Avoid wrapping entire widgets in `Consumer` — it's inefficient.

### Selector (Advanced Usage)

* Use `Selector` for fine-grained rebuild control.
* It only rebuilds when the selected value changes.

```dart
Selector<UserProvider, String?>(
  selector: (_, provider) => provider.email,
  builder: (context, email, child) {
    return Text('Email: ${email ?? "Unknown"}');
  },
)
```

## What I Built

1. A `UserProvider` that handles user state post-login.
2. A `FakeFireAuth` mock to simulate auth flows and trigger provider updates (not fully grasped yet — will revisit).

---

## Where to Next?

I'm now aiming to integrate **global state** with **conditional navigation**, especially around auth and a volatile linking status. My roadmap looks like this:

* Learn about `Selector` (for granular rebuilds)
* Build a `StateAwareSplashScreen` that routes based on login/link status
* Explore global navigation triggers
* Understand the deciding factors between `http` and `dio` for backend when building an advanced HTTP client with interceptors and retry logic)
* Explore interceptors to enforce auth

---

## Reference

- [Flutter State Management Docs](https://docs.flutter.dev/data-and-backend/state-mgmt/simple)
- [10 minute Provider Tutorial and Exercise With context.watch and context.read](https://www.youtube.com/watch?v=FUDhozpnTUw)
