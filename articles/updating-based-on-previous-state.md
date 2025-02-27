---
id: 'dh128u3u38'
title: 'The React Rule For Updating State Which Is Based On Previous State'
date: '2024-09-29'
summary: 'A little post about a discovery I made on the technically best way to update state in React based on the previous state.'
category: 'React'
---

A little post about a discovery I made on the technically best way to update state in React based on the previous state.

### Yet Another React Rule That We Break Everyday

Apparently there is a rule in React, that if you are updating state and that state depends on the previous state, you should parse a function instead.

Lets create a scenario of where this rule applies

```tsx
const [posts, setPosts] = useState<Post[]>([])

const updatePostHandler = (newPost: Post) => {
	setPosts(newPost, ...posts)
}
```

In the above code, (which works btw) we start with an empty array of posts in state, then we use the function `updatePostHandler` to update this array and add new post using the spread operator.

### Apparently this is not ideal, here is why

React does not update your state instantly, and its not guaranteed that it will do so although it schedules these updates. This can be a problem if say you want to update multiple states at the same time for rapidly changing data, say you are providing real-time updates and statistics for a game, and by the time React gets to the scheduled state, it will already be outdated. 

What you need therefore is a way of ensuring that React updates your state to the current state even if React has multiple pending updates on the way. 

### The better way

Nothing fancy here, you simply add a function inside your setState function like this

```tsx
const [posts, setPosts] = useState<Post[]>([])

const updatePostHandler = (newPost: Post) => {
	setPosts((existingPosts) => [newPost, ...existingPosts] )
}
```

**Notes**

- I used existingPosts because its the most readable, however you can use anything else you want, you could literally name it carnay and the code will still work.
- Another reminder that all state in react is potentially undefined until you scream at it that it isn’t!
- This feature isn't limited to arrays only. But whenever your current state depends on the old state. 