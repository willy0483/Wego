import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/lift/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/lift/$id"!</div>;
}
