<div align="center">

# 🚀 DevStack

### Build & Curate Your Ideal Development Stack

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.7-1AD1A5?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)

<p align="center">
  <strong>DevStack</strong> is an interactive web application designed for developers to discover modern software tools across Frontend, Backend, Databases, and DevOps, allowing them to compare technologies and assemble their personal development stack in real time.
</p>

[Explore Features](#-key-features) • [Tech Stack](#-technologies-used) • [Getting Started](#-getting-started) • [React Concepts](#-react-concepts--qa)

</div>

---

## 📖 About The Project

**DevStack** provides an intuitive platform for developers to explore popular tools and frameworks. Whether you're architecting your next startup MVP or planning a hobby project, DevStack helps you choose the right tools per category, visualize your selected technologies, and manage your custom stack with smooth feedback and notifications.

---

## ✨ Key Features

- 🔍 **Interactive Technology Catalog**
  Browse curated technology cards complete with icons, difficulty ratings (e.g., _Beginner-Friendly_, _Intermediate_), community star ratings, descriptive summaries, and category badges.

- 🛠️ **Live Custom Stack Builder**
  Add technologies to your personal stack with automatic duplicate prevention. Inspect your current selections in a dedicated stack sidebar, remove individual items, or reset the whole stack with a single click.

- ⚡ **Responsive Feedback & Seamless UX**
  Enjoy instant user feedback powered by **React Toastify** (success, warning, info, and error alerts), dynamic card state updates (_"Add to Stack"_ vs _"Added to Stack"_), and a custom **React Suspense** animated loading screen while data loads.

---

## 💻 Technologies Used

| Technology                    | Purpose                                                                           |
| :---------------------------- | :-------------------------------------------------------------------------------- |
| **React 19**                  | Core UI library utilizing modern features such as `Suspense` and the `use()` hook |
| **TypeScript**                | Type-safe code architecture with defined interfaces and type definitions          |
| **Vite**                      | Next-generation fast frontend build tool and development server                   |
| **Tailwind CSS v4 & DaisyUI** | Utility-first responsive design, modern gradients, and UI components              |
| **React Toastify**            | Elegant and customizable pop-up notifications for user actions                    |
| **React Icons**               | Clean vector icons used across navigation and interactive elements                |

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher recommended) and `npm` installed.

### Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/codewarrior-ahnaf/devstack.git
   cd devstack
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:5173` to see DevStack live!

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
devstack/
├── public/
│   └── data.json              # Curated technology dataset
├── src/
│   ├── assets/                # Logos, illustrations, and images
│   ├── components/
│   │   ├── layout/            # Navbar, HeroSection, Footer
│   │   ├── stack/             # Stack panel components
│   │   └── tech/              # TechCard & TechSection components
│   ├── types/                 # TypeScript type declarations
│   ├── App.tsx                # Main application component & data fetcher
│   ├── index.css              # Tailwind and global styles
│   └── main.tsx               # Application entry point
├── package.json
└── README.md
```

---

## 🧠 React Concepts & Q/A

Short, simple explanations of fundamental React concepts answered in my own words:

### 1. What is JSX, and why is it used in React?

**JSX (JavaScript XML)** is a syntax extension that allows us to write HTML-like markup directly inside JavaScript and TypeScript files.

- **Why it's used:** It makes designing and understanding user interfaces much simpler and more intuitive. Instead of manually creating elements using tedious functions like `React.createElement()`, JSX provides a readable and declarative syntax that couples visual UI with component logic.

---

### 2. What is the difference between props and state?

- **Props (Properties):** External, read-only data passed from a parent component down to a child component (similar to arguments passed to a function). A child component cannot directly alter the props it receives.
- **State:** Internal, mutable data that is managed directly within a component. When state changes (using its updater function), React automatically re-renders the component to reflect the latest values in the UI.

---

### 3. What does the `useState` hook do, and where did you use it in this project?

The **`useState`** hook allows functional components to store and maintain state across renders, returning the current state value and a function to update it.

- **Usage in this project:** I used `useState<techType[]>([])` inside `TechSection.tsx` to hold the user's selected `stack`. It keeps track of selected technologies, updates when an item is added or removed, and resets to an empty array when the user clicks _"Remove All"_.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The **`useEffect`** hook lets components perform side effects—such as data fetching, subscriptions, or manual DOM manipulations—after rendering has taken place.

- **Why it is needed to load JSON data:** Fetching data over a network is an asynchronous side effect. If we fetched data directly inside the component body, it would trigger a re-fetch on every single render, causing an infinite loop. `useEffect` (with an empty dependency array `[]`) ensures the data is fetched safely only once when the component first mounts.
- _Note:_ In this project, I used React 19's `use()` hook paired with `<Suspense fallback={<LoadingScreen />}>` to resolve the JSON fetch promise with a loading state.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique **`key`** prop gives each rendered element a stable identity that React uses in its Virtual DOM diffing process.

- **Why it matters:** When lists change (adding, deleting, or reordering items), keys help React pinpoint exactly which item changed, moved, or was removed, rather than re-rendering the entire list. In DevStack, I used each item's unique identifier (`key={tech.id}`) for both the technology cards and the stack list items.

---

### 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** means dynamically rendering different UI blocks or components based on whether specific conditions are truthy or falsy.

- **Example in this project:** In `TechSection.tsx`, I conditionally render the stack list using a ternary operator:
  ```tsx
  {stack.length === 0 ? (
    <p className="rounded-xl border border-dashed border-gray-200 px-3 py-5 text-center text-xs text-gray-400">
      Add technologies to build your stack.
    </p>
  ) : (
    stack.map((tech) => (
      /* Render selected technology items */
    ))
  )}
  ```
  When the stack is empty (`stack.length === 0`), it displays the dashed empty state message. Once items are added, it renders the list of cards and enables the _"Remove All"_ button (`disabled={stack.length === 0}`).

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

- **Parent to Child:** Data is passed downwards through **props**. In `TechSection.tsx`, the parent passes the `tech` object, a boolean `isSelected`, and an `onAdd` callback function directly into the child `<TechCard />`.
- **Child to Parent:** The child sends events or data back upwards by **invoking a callback function** received through props. When the user clicks _"Add to Stack"_ on `<TechCard />`, the child triggers `onAdd()`. This notifies the parent (`TechSection`) to run `addToStack(tech)`, updating the stack state and triggering a toast notification.

---

<div align="center">
  <sub>Built with ❤️ by Codewarrior Ahnaf.</sub>
</div>
