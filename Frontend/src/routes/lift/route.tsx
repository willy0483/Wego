import Aside from "@/components/aside";
import FilterNav from "@/components/filterNav";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/lift")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <FilterNav />
      <div className="container mx-auto min-h-screen max-w-5xl flex flex-col xl:grid xl:grid-cols-[20%_1fr] gap-8 py-4">
        <Aside />
        <Outlet />
      </div>
    </>
  );
}
