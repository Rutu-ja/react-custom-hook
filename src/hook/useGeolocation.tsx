import { useState, useEffect } from "react";

function useGeolocation() {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(
    null
  );

  useEffect(() => {
    if (!navigator.geolocation) return;

    const success = (position: GeolocationPosition) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    };

    navigator.geolocation.getCurrentPosition(success);
  }, []);

  return location;
}

export { useGeolocation };
