# Dev Stack

Dev Stack is a website where you can look through a bunch of dev tools and technologies (like React, Node, MongoDB etc.) and add the ones you like to your own personal "stack" — kind of like adding items to a cart, but for tech instead of products.

I built this project to practice React — things like components, state, and loading data from a JSON file.

## Technology Used

- React.js
- Vite
- Tailwind CSS
- React-Toastify
- JSON (for the technology data)

## Features

1. **Browse technologies** – You can see all the technologies in cards, with name, description, category, difficulty, and rating. The data comes from a JSON file.
2. **Add to your stack** – Click "Add to Stack" and it gets added to your stack list. You can't add the same one twice, it'll show a warning if you try.
3. **Remove from stack** – You can remove one item at a time, or clear the whole stack in one click. Every action shows a small toast message so you know it worked.

---

## React Questions

**1. What is JSX, and why is it used in React?**

JSX lets you write HTML-looking code inside your JavaScript file, like `<div>Hello</div>`. Without JSX we'd have to write everything using `React.createElement()`, which is way more painful to read. So JSX just makes writing components a lot easier.

**2. What is the difference between props and state?**

Props are values a component gets from its parent, and it can't change them itself. State is a value a component keeps and manages on its own, and it can change over time, like when you click something. So props come from outside, state lives inside.

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` is how a component remembers a value and updates the page when that value changes. I used it in `App.jsx` to keep track of the technologies the user has added to their stack, and also in `Navbar.jsx` to open/close the mobile menu.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` runs some code after the component shows up on the screen, mostly used for things like fetching data. I used it in `TechnologyList.jsx` to fetch the technologies.json file once the component loads, so the data doesn't get fetched again and again on every render.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

The key helps React know which item is which when the list changes, like if something gets added or removed. If items don't have a proper key, React can mix them up and update the wrong one on screen. I used each technology's `id` as the key.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**

Conditional rendering just means showing different things depending on a condition, like an if/else but inside JSX. I used it in `YourStack.jsx` — if the stack is empty it shows "Your stack is empty", otherwise it shows the list of added technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

The parent sends data down to the child using props, like `<TechnologyCard technology={tech} />`. If the child needs to send something back up, the parent passes a function as a prop, and the child calls that function when needed. In this project, `App.jsx` passes the stack and the function to update it down to `TechnologyList`, and then down to `TechnologyCard` and `YourStack`, so clicking "Add to Stack" can update the state back up in `App.jsx`.
