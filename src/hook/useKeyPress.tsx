import { useState, useEffect } from "react";

function useKeyPress(targetKey: string) {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const keyDownHandler = ({ key }: KeyboardEvent) => {
      if (key === targetKey) setKeyPressed(true);
    };

    const keyUpHandler = ({ key }: KeyboardEvent) => {
      if (key === targetKey) setKeyPressed(false);
    };

    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    };
  }, [targetKey]);

  return keyPressed;
}

export { useKeyPress };
