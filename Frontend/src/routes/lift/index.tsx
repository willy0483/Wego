import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/lift/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/lift/"!</div>;
}
