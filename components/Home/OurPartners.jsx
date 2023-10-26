/**
 * OurPartners.js
 */

"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const carouselData = [
  {
    id: 1,
    src: "/Partners/cec-bank.png",
    title: "Cec Bank",
  },
  {
    id: 2,
    src: "/Partners/kia.png",
    title: "Kia Motors",
  },
  {
    id: 3,
    src: "/Partners/mol.png",
    title: "Mol",
  },
  {
    id: 4,
    src: "/Partners/navrom.png",
    title: "Navrom",
  },
  {
    id: 5,
    src: "/Partners/omv.png",
    title: "OMV",
  },
  {
    id: 6,
    src: "/Partners/petrom.png",
    title: "Petrom",
  },
  {
    id: 7,
    src: "/Partners/primaria-capitalei.png",
    title: "Primaria Capitalei",
  },
  {
    id: 8,
    src: "/Partners/stb.png",
    title: "Stb",
  },
  {
    id: 9,
    src: "/Partners/cec-bank.png",
    title: "Cec Bank",
  },
  {
    id: 10,
    src: "/Partners/kia.png",
    title: "Kia Motors",
  },
  {
    id: 11,
    src: "/Partners/mol.png",
    title: "Mol",
  },
  {
    id: 12,
    src: "/Partners/navrom.png",
    title: "Navrom",
  },
  {
    id: 13,
    src: "/Partners/omv.png",
    title: "OMV",
  },
  {
    id: 14,
    src: "/Partners/petrom.png",
    title: "Petrom",
  },
  {
    id: 15,
    src: "/Partners/primaria-capitalei.png",
    title: "Primaria Capitalei",
  },
  {
    id: 16,
    src: "/Partners/stb.png",
    title: "Stb",
  },
];

const OurPartners = () => {
  const [width, setWidth] = useState(10);

  const handleResize = useCallback(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 500) {
      setWidth(28);
    } else if (screenWidth < 700) {
      setWidth(21);
    } else if (screenWidth < 1100) {
      setWidth(15);
    } else if (screenWidth < 1300) {
      setWidth(13);
    } else {
      setWidth(10);
    }
  }, [setWidth]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const autoplayOptions = {
    delay: 2200,
    // delay: 2500,
    stopOnInteraction: false,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      duration: 1200,
      // duration: 60,
      // align: "start",
      align: "center",
      containScroll: "trimSnaps",
    },
    [Autoplay(autoplayOptions)]
  );

  return (
    <div className="w-full py-5 mx-auto space-y-10 max-w-7xl">
      <div className="w-full mx-auto font-serif text-3xl text-center max-w-7xl">
        Our Partners
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {carouselData.map(({ id, src, title }) => {
            const itemStyle = {
              flex: `0 0 ${width}%`,
            };
            return (
              <div
                className="relative mx-3 text-center"
                style={itemStyle}
                key={id}
              >
                <Image
                  src={src}
                  width={100}
                  height={50}
                  className="object-contain mx-auto "
                  alt={title}
                />
                <div className="py-3 text-sm text-zinc-600">{title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  // <div className="w-full">
  //   <div className="max-w-[1300px] mx-auto ">
  //     <div className="overflow-hidden" ref={emblaRef}>
  //       <div className="flex">
  //         {carouselData.map(({ id, src, title }) => {
  //           return (
  //             <div
  //               className={`relative  text-center flex-[0_0_${width}%]`}
  //               key={id}
  //             >
  //               <Image
  //                 src={src}
  //                 // fill
  //                 width={100}
  //                 height={50}
  //                 className="object-contain mx-auto "
  //                 alt={title}
  //               />
  //               <div className="py-3 text-sm text-zinc-600">{title}</div>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // );
};
export default OurPartners;
