import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Client-only smooth scroll + scroll-triggered reveals.
 * - Lenis drives smooth scrolling for the whole page.
 * - GSAP ScrollTrigger animates `.reveal-section` and staggers
 *   `.animate-on-scroll` children into view.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Sync Lenis with GSAP's ticker so ScrollTrigger stays in sync.
    lenis.on("scroll", ScrollTrigger.update);
    const tickerFn = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    // Intercept anchor clicks for smooth scrolling
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.hash && anchor.hash.startsWith("#") && anchor.pathname === window.location.pathname) {
        const id = anchor.hash;
        if (document.querySelector(id)) {
          e.preventDefault();
          lenis.scrollTo(id, { offset: -80 }); // Offset for the fixed header
        }
      }
    };
    document.documentElement.addEventListener("click", handleHashClick);

    // Reveal animations & Parallax
    const ctx = gsap.context(() => {
      // General section reveal
      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
        const targets = section.querySelectorAll<HTMLElement>(
          ".animate-on-scroll",
        );

        if (targets.length === 0) {
          gsap.from(section, {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        } else {
          gsap.from(targets, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        }
      });

      // Gallery Images Reveal
      gsap.utils.toArray<HTMLElement>(".gallery-img").forEach((item) => {
        gsap.from(item, {
          scale: 0.8,
          opacity: 0,
          rotation: 2,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Parallax Backgrounds (e.g. Hero image)
      gsap.utils.toArray<HTMLElement>(".parallax-bg").forEach((bg) => {
        gsap.to(bg, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: bg.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Parallax Items (e.g. Floating images in story/gallery)
      gsap.utils.toArray<HTMLElement>(".parallax-item").forEach((item) => {
        const speed = item.dataset.speed ? parseFloat(item.dataset.speed) : 0.5;
        gsap.to(item, {
          y: () => -100 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    });

    return () => {
      document.documentElement.removeEventListener("click", handleHashClick);
      ctx.revert();
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
    };
  }, []);

  return null;
}
