# React Custom Hooks Collection

A collection of useful custom React hooks to simplify state management, UI interactions, and API calls.

## Installation

You can install this package using npm or yarn:

```sh
npm install your-package-name
```

or

```sh
yarn add your-package-name
```

## Usage

Import the hooks you need into your React components:

```tsx
import {
  useClipboard,
  useDarkMode,
  useDebounce,
  useFetch,
} from "your-package-name";
```

## Available Hooks

### 1. `useClipboard`

Copy text to clipboard.

```tsx
const { copyToClipboard } = useClipboard();
<button onClick={() => copyToClipboard("Copied text!")}>Copy</button>;
```

---

### 2. `useDarkMode`

Toggle dark mode state.

```tsx
const [isDarkMode, toggleDarkMode] = useDarkMode();
<button onClick={toggleDarkMode}>Toggle Dark Mode</button>;
```

---

### 3. `useDebounce`

Debounce a value with a delay.

```tsx
const debouncedValue = useDebounce(searchTerm, 500);
```

---

### 4. `useDocumentTitle`

Set the document title dynamically.

```tsx
useDocumentTitle("My Custom Title");
```

---

### 5. `useFetch`

Fetch data from an API.

```tsx
const { data, loading, error } = useFetch(
  "https://jsonplaceholder.typicode.com/users"
);
```

---

### 6. `useGeolocation`

Get the user's current location.

```tsx
const { latitude, longitude } = useGeolocation();
```

---

### 7. `useKeyPress`

Detect when a key is pressed.

```tsx
const isEnterPressed = useKeyPress("Enter");
```

---

### 8. `useLocalStorage`

Store and retrieve values from `localStorage`.

```tsx
const [name, setName] = useLocalStorage("name", "");
```

---

### 9. `useMediaQuery`

Detect screen size changes.

```tsx
const isMobile = useMediaQuery("(max-width: 768px)");
```

---

### 10. `useSessionStorage`

Store values in `sessionStorage`.

```tsx
const [email, setEmail] = useSessionStorage("email", "");
```

---

### 11. `useTimeout`

Execute a function after a delay.

```tsx
const { start, clear } = useTimeout(() => console.log("Timeout!"), 5000);
```

---

### 12. `useToggle`

Toggle a boolean state.

```tsx
const [isOpen, toggle] = useToggle();
```

---

### 13. `useWindowSize`

Get window width and height.

```tsx
const { width, height } = useWindowSize();
```

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

MIT
