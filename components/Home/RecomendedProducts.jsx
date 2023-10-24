/**
 * RecomendedProducts.jsx
 */

"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaCartPlus } from "react-icons/fa6";

const products = [
  {
    id: 1,
    href: "/",
    title: "Email acrilo-poliuretanic 2K",
    sub: "Seria: 351",
    img: "/Vopsele/chimtitan-red-1-removebg-preview.png",
  },
  {
    id: 2,
    href: "/",
    title: "Email alchidic acrilat ",
    sub: "Seria: 522",
    img: "/Vopsele/chimtitan-red-1-removebg-preview.png",
  },
  {
    id: 3,
    href: "/",
    title: "Grund epoxidic in doi componenti",
    sub: "Seria: 302",
    img: "/Vopsele/chimtitan-red-1-removebg-preview.png",
  },
  {
    id: 4,
    href: "/",
    title: "Vopsea acrilica de marcaj rutier 2K",
    sub: "Seria: 351",
    img: "/Vopsele/chimtitan-red-1-removebg-preview.png",
  },
  {
    id: 5,
    href: "/",
    title: "Vopsea epoxi-aquarezist UHS ",
    sub: "Seria: 309",
    img: "/Vopsele/chimtitan-red-1-removebg-preview.png",
  },
];

const RecomendedProducts = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    dragFree: true,
    align: "center",
    containScroll: "trimSnaps",
  });
  return (
    <div className="flex flex-col w-full h-full py-12 space-y-10 md:py-24 bg-zinc-100">
      <div className="w-full mx-auto font-serif text-3xl text-center max-w-7xl">
        Recommended Products
      </div>
      <div
        className="relative flex w-full h-auto gap-16 px-20 pb-20 mx-auto overflow-hidden embla max-w-7xl"
        ref={emblaRef}
      >
        <div className="relative flex items-center w-full gap-8 py-8 mx-2 md:px-0 embla__container  touch-pan-y h-[35vh]">
          {products.map((el, idx) => (
            <div
              key={idx}
              className="embla__slide relative z-0 h-full w-[30%] min-w-[200px] grid grid-rows-3 rounded-md  active:cursor-grabbing dark:bg-neutral-900/30"
            >
              <div className="row-span-2">
                <Image
                  src={"/Vopsele/chimtitan-red-1-removebg.png"}
                  alt="Vopsea Recomandata"
                  width={200}
                  height={200}
                  className="object-contain object-left w-full h-full"
                />
              </div>
              <div className="row-span-1 px-2">
                <div className="grid w-full h-full grid-rows-3 gap-10 ">
                  <div className="row-span-2 ">
                    <div>{el.title}</div>
                    <div>{el.sub}</div>
                  </div>
                  <div className="row-span-1">
                    <div className="grid grid-cols-4 gap-2 mt-2">
                      <div
                        // href={el.href}
                        className="col-span-3 bg-zinc-800 hover:bg-zinc-950 py-1.5  text-center text-white rounded-md hover:cursor-pointer hover:scale-105 transition-all duration-100"
                      >
                        Learn More
                      </div>
                      <button className="flex items-center justify-center col-span-1 text-center transition-all duration-100 bg-white border rounded-md group hover:border-zinc-400 border-zinc-300 hover:cursor-pointer hover:scale-110">
                        <FaCartPlus className="w-4 h-4 group-hover:text-zinc-900 text-zinc-700" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center xl:hidden">{`Slide ->`}</div>
    </div>
  );
};

export default RecomendedProducts;

// <Image
//   src={el.img}
//   alt="Product Image"
//   width={300}
//   height={200}
//   className="w-full rounded-lg object-cover h-full group-hover:drop-shadow-[0px 7px 3px rgba(0,0,0,0.12)]"
// />
