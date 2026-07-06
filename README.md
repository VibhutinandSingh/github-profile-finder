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
- 💬 Helpful tooltip for disabled search button
- ❌ Error handling for invalid usernames

---

## Built With

- React
- JavaScript (ES6+)
- Tailwind CSS
- GitHub REST API

---

## What I Learned

While building this project, I learned:

- Working with APIs using `fetch()`
- Using `async` / `await`
- Handling API responses and HTTP status codes
- Managing state with `useState`
- Conditional rendering in React
- Form handling using `onSubmit`
- Improving UX with disabled states and tooltips
- Rendering dynamic data from an API

---

## Preview

![GitHub Profile Finder Preview](./assets/github-profile-finder-preview.png)

---

## Installation

```bash
git clone https://github.com/VibhutinandSingh/github-profile-finder.git

cd github-profile-finder

npm install

npm run dev
```

---

## Future Improvements

- Loading spinner while fetching data
- Better network error handling
- Keyboard shortcut to focus the search bar
- Smooth animations
- Recently searched profiles
- Dark / Light mode

---

## Author

**Vibhutinand Singh**

If you liked this project, feel free to ⭐ the repository.
