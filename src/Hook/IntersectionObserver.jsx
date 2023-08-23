import { useEffect } from "react";

function useIntersectionObserver(targets, options, callback) {
  console.log("hook perso", targets, options);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    targets.forEach((target) => {
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      targets.forEach((target) => {
        if (target) {
          observer.unobserve(target);
        }
      });
    };
  }, [targets, options, callback]);
}

export default useIntersectionObserver;
