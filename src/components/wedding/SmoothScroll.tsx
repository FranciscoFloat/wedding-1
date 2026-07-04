"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Client-only smooth scroll + scroll-triggered reveals.
 *
 * KEY FIX: We use `gsap.fromTo()` with `immediateRender: false` instead of
 * `gsap.from()`. This ensures GSAP does NOT set elements to opacity:0
 * immediately on mount. Without this, if ScrollTrigger recalculates positions
 * AFTER Lottie/image assets load (which shift the page height), elements
 * whose trigger points have already passed stay permanently invisible.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const tickerFn = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger when images/Lotties load and shift the layout
    const resizeObserver = new ResizeObserver(() => ScrollTrigger.refresh());
    resizeObserver.observe(document.body);

    // Staggered refreshes during initial load to catch any late-loading assets
    const refreshTimeouts = [200, 600, 1200, 2500].map((ms) =>
      setTimeout(() => ScrollTrigger.refresh(), ms)
    );

    // Smooth anchor navigation
    const handleHashClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (
        anchor?.hash?.startsWith("#") &&
        anchor.pathname === window.location.pathname &&
        document.querySelector(anchor.hash)
      ) {
        e.preventDefault();
        lenis.scrollTo(anchor.hash, { offset: -80 });
      }
    };
    document.documentElement.addEventListener("click", handleHashClick);

    // ── Reveal animations ────────────────────────────────────────────────────
    const ctx = gsap.context(() => {

      // Section reveal — animate children if present, else animate the section itself
      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
        const targets = Array.from(
          section.querySelectorAll<HTMLElement>(".animate-on-scroll")
        );
        const els = targets.length > 0 ? targets : [section];

        gsap.fromTo(
          els,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: targets.length > 0 ? 0.12 : 0,
            immediateRender: false,
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      // Gallery image reveals
      gsap.utils.toArray<HTMLElement>(".gallery-img").forEach((item) => {
        gsap.fromTo(
          item,
          { scale: 0.88, opacity: 0, rotation: 2 },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1.2,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      // Parallax backgrounds
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

      // Parallax floating items
      gsap.utils.toArray<HTMLElement>(".parallax-item").forEach((item) => {
        const speed = parseFloat(item.dataset.speed ?? "0.5");
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
      resizeObserver.disconnect();
      refreshTimeouts.forEach(clearTimeout);
      document.documentElement.removeEventListener("click", handleHashClick);
      ctx.revert();
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
    };
  }, []);

  return null;
}

