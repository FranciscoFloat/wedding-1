import { createFileRoute } from "@tanstack/react-router";
import { WeddingLanding } from "@/components/wedding/WeddingLanding";

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

function ClientOnlyLanding() {
  if (typeof window === "undefined") {
    return <LoadingFallback />;
  }
  return <WeddingLanding />;
}

export const Route = createFileRoute("/")({
  component: ClientOnlyLanding,
});
