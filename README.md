# GitHub Profile Finder

A React application that allows users to search for any GitHub profile and view key information such as avatar, bio, followers, repositories, and profile links.

Built using React, the GitHub Users API, and Tailwind CSS.

---

## Features

- 🔍 Search GitHub users by username
- 👤 Display profile picture and basic information
- 📄 View user bio with fallback if unavailable
- 👥 Followers, Following and Public Repositories stats
- 📍 Display user location (with fallback)
- 🔗 Direct link to GitHub profile
- 📦 Quick access to user's repositories
- ⌨️ Press **Enter** to search
- 🚫 Search button is disabled when the input is empty
- 🔒 Input and search button are disabled while fetching data
- ⚡ Animated loading spinner during API requests
- 🎯 Input is automatically focused when the application loads
- 💾 Remembers the last searched username using Local Storage
- ✨ Smooth fade-in animation for the profile card
- 💬 Helpful tooltip for the disabled search button
- ❌ Friendly error message for invalid usernames
- 🌐 Graceful handling of network errors

---

## Built With

- React
- JavaScript (ES6+)
- Tailwind CSS
- GitHub REST API
- Browser Local Storage API

---

## What I Learned

While building this project, I learned:

- Working with APIs using `fetch()`
- Using `async` / `await`
- Handling API responses and HTTP status codes
- Managing state with `useState`
- Using `useEffect` for side effects
- Using `useRef` to interact with DOM elements
- Conditional rendering in React
- Form handling using `onSubmit`
- Managing loading and error states
- Persisting data using Local Storage
- Improving user experience with disabled states, loading indicators, animations, and autofocus
- Thinking beyond functionality and making product & UX decisions

---

## Preview

![GitHub Profile Finder Preview](./assets/github-profile-finder-preview.png)

---

## Challenges Faced

- Handling asynchronous API requests and loading states
- Managing error handling for invalid usernames and network failures
- Learning when to use `useEffect`, `useRef`, and Local Storage
- Improving the user experience through small but meaningful interactions

## Installation

```bash
git clone https://github.com/VibhutinandSingh/github-profile-finder.git

cd github-profile-finder

npm install

npm run dev
```

---

## Future Improvements

- Recently searched profiles
- Repository preview inside the application
- Dark / Light mode
- Copy profile link button
- Better mobile responsiveness
- Search suggestions

---

## Author

**Vibhutinand Singh**

If you liked this project, feel free to ⭐ the repository.