import { createFileRoute } from "@tanstack/react-router";
import { WeddingLanding } from "@/components/wedding/WeddingLanding";
import { useEffect, useState } from "react";

function LoadingFallback() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAF8F5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "2px solid #C9A96E",
          borderTopColor: "transparent",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

/**
 * ClientOnlyLanding renders a spinner on the server AND during the first
 * client render (so SSR HTML and initial hydration match — no React #418).
 * After hydration, useEffect fires and we swap to the real landing page.
 */
function ClientOnlyLanding() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <LoadingFallback />;
  return <WeddingLanding />;
}

export const Route = createFileRoute("/")({
  component: ClientOnlyLanding,
});
