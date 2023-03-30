import { useEffect, useRef, useState } from "react";

export const useNearScreen = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(ref.current);
  }, [ref]);

  return [show, ref];
};
