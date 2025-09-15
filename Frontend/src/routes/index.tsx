import { useSlides } from "@/lib/query";
import { createFileRoute } from "@tanstack/react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { data: Slides } = useSlides();

  return (
    <figure className=" relative flex w-full min-h-[calc(100vh-80px)] items-stretch justify-stretch">
      <Swiper
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        speed={5000}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full max-h-[calc(100vh-80px)]"
      >
        {Slides.map(({ imageUrl, id, text }) => (
          <SwiperSlide key={id} className="relative">
            <img
              className="object-cover w-full h-full"
              src={imageUrl}
              alt={"slide image"}
            />
            <figcaption className="absolute top-1/2 left-1/2 z-20 w-full flex justify-center items-center transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-black text-4xl text-center px-4 py-2">
                {text}
              </h1>
            </figcaption>
          </SwiperSlide>
        ))}
      </Swiper>
    </figure>
  );
}
