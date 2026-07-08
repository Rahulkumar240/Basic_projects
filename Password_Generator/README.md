# Password Generator

A modern React application that generates secure, customizable passwords based on user-defined constraints. The project demonstrates React's functional programming model, efficient state management, memoization techniques, and browser APIs to deliver a responsive user experience.

---

## Overview

Password Generator enables users to create random passwords with configurable length and optional inclusion of numbers and special characters. The application is built using React Hooks and focuses on performance optimization by minimizing unnecessary re-renders through memoization.

---

## Features

- Generate cryptographically-inspired random passwords
- Adjustable password length (6–20 characters)
- Toggle numeric characters
- Toggle special characters
- One-click password copy using the Clipboard API
- Responsive and minimal UI
- Instant password regeneration on configuration changes

---

## Tech Stack

- React
- JavaScript (ES6+)
- Tailwind CSS
- Vite

---

## React Concepts Demonstrated

### State Management

- `useState`
  - Password length
  - Number inclusion
  - Special character inclusion
  - Generated password

### Performance Optimization

- `useCallback`
  - Memoizes the password generation algorithm
  - Prevents unnecessary recreation of callback functions
  - Optimizes dependency-based re-rendering

### Side Effects

- `useEffect`
  - Automatically regenerates passwords whenever configuration changes
  - Synchronizes UI with application state

### DOM Manipulation

- `useRef`
  - References the password input field
  - Enables text selection before copying
  - Eliminates unnecessary re-renders caused by DOM access

---

## Password Generation Algorithm

The password generation process follows these steps:

1. Build the available character pool
   - Uppercase letters
   - Lowercase letters
   - Numbers (optional)
   - Special characters (optional)

2. Iterate based on the selected password length.

3. Randomly select characters from the generated pool.

4. Construct the final password.

5. Update the UI using React state.

### Time Complexity

| Operation | Complexity |
|----------|------------|
| Character pool construction | O(1) |
| Password generation | O(n) |
| Overall | **O(n)** |

Where **n** is the password length.

---

## Project Structure

```text
Password_Generator/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

```bash
git clone https://github.com/<your-username>/Basic_projects.git

cd Basic_projects/Password_Generator

npm install
```

### Run the Project

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## Engineering Highlights

- Functional component architecture
- Declarative UI rendering
- Immutable state updates
- Memoized callbacks using `useCallback`
- Controlled form components
- Dependency-aware side effects
- Direct DOM interaction through `useRef`
- Clipboard API integration
- Responsive UI with Tailwind CSS

---

## Future Enhancements

- Password strength indicator
- Exclude ambiguous characters (`0`, `O`, `l`, `I`)
- Password entropy calculation
- Custom character sets
- Password history
- Copy success notification
- Dark mode
- Unit testing using React Testing Library
- TypeScript migration

---

## Key Learning Outcomes

This project demonstrates practical understanding of:

- React Hooks
- State-driven UI architecture
- Memoization and render optimization
- Browser Clipboard API
- Event handling
- Controlled components
- Dynamic rendering
- Algorithm implementation
- Responsive frontend development

---

## License

This project is licensed under the MIT License.
