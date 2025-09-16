import Aside from "@/components/aside";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/lift")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mx-auto min-h-screen max-w-5xl flex flex-col xl:grid xl:grid-cols-[20%_1fr] gap-8 py-4 px-4">
      <Aside />
      <Outlet />
    </div>
  );
}
