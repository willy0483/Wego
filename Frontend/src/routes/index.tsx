import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className="flex w-full min-h-[calc(100vh-80px)] items-stretch justify-stretch">
      <figure className="flex-1 flex m-0 p-0 relative">
        <img
          src="bg/Slides.png"
          alt="background image forside"
          className="w-full h-full object-cover object-center flex-1"
        />
        <figcaption className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {/* todo: animate text */}
          <h1 className="text-black text-6xl">Vi gør byen grønnere</h1>
        </figcaption>
      </figure>
    </section>
  );
}
