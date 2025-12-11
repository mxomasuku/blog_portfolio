---
title: "An Introduction to Flutter Widget Lifecycle"
description: "Understanding the Flutter Widget Lifecycle with initState(), build(), and dispose() methods for optimized app performance."
date: "2025-01-24"
author: "Mxo Masuku"
categories: ["Flutter", "Mobile Development"]
featured: false
draft: false
---

Coming from a React background and the nightmare that came with `useEffect`, `componentDidMount`, and other component-related challenges, I made it a point to understand the **Flutter Widget Lifecycle**. I imagine my understanding of the basics in theory will be key in optimizing my app performance and handling conditional rendering. (*No different from React, I hope.*)

## We Start Here  

There are **three key methods** to understand in the Widget Lifecycle:  

1. `initState()`
2. `build()`
3. `dispose()`

---

## `initState()`

`initState`—as the name suggests—is used for **initializing state** in a `StatefulWidget`.  

### Anatomy of `initState()`

```dart
@override
void initState() {
  super.initState();
}
```

## Good vs Bad Practices in Flutter 

### Good Practices ✅

1. Use initState() for one-time initialization, calling methods required only once in a widget lifecycle.
2. Always call super.initState(). Don't worry about this—it usually comes built-in. Just don't delete it.
3. Use widget bindings to handle content-dependent actions, like listeners and animation controllers.
4. Use late initialization for expensive objects instead of recreating them.
5. Keep inherited widgets immutable when initializing a widget.

### Bad Practices ❌

- Don't call setState inside initState(). You can't set state inside a widget that isn't fully initialized.
- Don't make an async call inside initState(), use a separate method.
- Don't access BuildContext directly in initState().
- Don't recreate expensive objects unnecessarily.
- Don't modify inherited widgets during initialization.

## build()

The build() method is executed when the widget is built and called after setState() is called.

## dispose()

Called right before a conditionally rendered widget is destroyed.
