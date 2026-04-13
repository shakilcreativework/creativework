# 🧲 MagneticButton Component

A reusable React button component with a smooth **magnetic hover effect**, built using **React**, **Tailwind CSS**, and **clsx**.

---

## ✨ Features

* 🧲 Magnetic hover interaction
* 🎨 Fully customizable with `className`
* 🔗 Supports:

  * Button
  * Internal routing (`react-router-dom`)
  * External links
* ⚡ Lightweight and reusable
* 🎯 Smart default styles (auto background & text)

---

## 📦 Installation

Make sure you have these installed:

```bash
npm install clsx react-router-dom
```

---

## 🚀 Usage

### 1. Import Component

```jsx
import MagneticButton from "./MagneticButton";
```

---

### 2. Basic Button

```jsx
<MagneticButton text="Click Me" />
```

---

### 3. With Children (Recommended)

```jsx
<MagneticButton>
  Click Me 🚀
</MagneticButton>
```

---

### 4. Custom Styling

```jsx
<MagneticButton className="bg-amber-300 text-xl hover:scale-105">
  Custom Button
</MagneticButton>
```

---

### 5. React Router Link

```jsx
<MagneticButton to="/about" as="link">
  Go to About
</MagneticButton>
```

---

### 6. External Link

```jsx
<MagneticButton href="https://google.com" as="a">
  Open Google
</MagneticButton>
```

---

### 7. Click Handler

```jsx
<MagneticButton onClick={() => alert("Clicked!")}>
  Click Action
</MagneticButton>
```

---

## ⚙️ Props

| Prop        | Type     | Description                           |
| ----------- | -------- | ------------------------------------- |
| `children`  | node     | Custom content inside button          |
| `text`      | string   | Alternative to children               |
| `className` | string   | Custom Tailwind classes               |
| `to`        | string   | Route path (for React Router)         |
| `href`      | string   | External link                         |
| `onClick`   | function | Click handler                         |
| `as`        | string   | `"button"` (default), `"link"`, `"a"` |

---

## 🎨 Default Styles

* `inline-flex` layout
* `rounded-full`
* `shadow-xs` → `hover:shadow-sm`
* `transition-transform`
* Default:

  * `bg-white` (if no bg provided)
  * `text-black` (if no text color provided)

---

## ⚠️ Important Notes

### 1. React Router Setup

Wrap your app with:

```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```

---

### 2. Tailwind Shadow

`shadow-xs` is **not default** in Tailwind.

Add this to your `tailwind.config.js`:

```js
theme: {
  extend: {
    boxShadow: {
      xs: "0 1px 2px rgba(0,0,0,0.05)",
    },
  },
},
```

---

### 3. Class Override Behavior

You can override defaults:

```jsx
<MagneticButton className="bg-red-500 text-white">
  Override Style
</MagneticButton>
```

---

## 🧠 How It Works

* Tracks mouse position inside the button
* Applies `transform: translate()` for magnetic effect
* Resets on mouse leave
* Uses `useRef` + `useEffect`

---

## 📁 File Structure

```
/components
  └── MagneticButton.jsx
```

---

## 💡 Future Improvements

* Variants (`primary`, `outline`, `ghost`)
* Sizes (`sm`, `md`, `lg`)
* Disable magnetic effect on mobile
* Glow / gradient effects

---

## 🧑‍💻 Author

Made with ❤️ using React + Tailwind

---

## 📄 License

Free to use and modify.
