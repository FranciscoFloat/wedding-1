import { createFileRoute } from "@tanstack/react-router";
import { WeddingLanding } from "@/components/wedding/WeddingLanding";

export const Route = createFileRoute("/")({
  component: WeddingLanding,
});
