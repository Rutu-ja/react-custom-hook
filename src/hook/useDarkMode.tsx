import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useDarkMode() {
  const [enabled, setEnabled] = useLocalStorage("dark-mode", false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  return [enabled, setEnabled] as const;
}

export { useDarkMode };
