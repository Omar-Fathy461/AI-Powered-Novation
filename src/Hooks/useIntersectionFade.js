import { useRef, useEffect } from "react";
import gsap from "gsap";

const useIntersectionFade = () => {
  const sectionRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !sectionRef.current.includes(el)) {
      sectionRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fadeIn(entry.target);
          } else {
            fadeOut(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sectionRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionRef.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

 const fadeIn = (element) => {
  if (!element) return; // إذا كان العنصر غير موجود
  gsap.to(element, 2, {
    opacity: 1,
    y: 0,
    ease: "power4.out",
    stagger: {
      amount: 0.3,
    },
  });
};

const fadeOut = (element) => {
  if (!element) return; // إذا كان العنصر غير موجود
  gsap.to(element, 2, {
    opacity: 0,
    y: -20,
    ease: "power4.out",
  });
};


  return { addToRefs };
};

export default useIntersectionFade;
