/**
 * HeroVideo.jsx
 */

// "use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
// import { useState, useEffect } from "react";

// const vidUrl = {
//   VID960: "containers-960x540.mp4",
//   VID1280: "containers-1280x720.mp4",
//   VID1920: "containers-1920x1080.mp4",
//   VID2560: "containers-2560x1440.mp4",
// };

// const getVideoSource = (width) => {
//   if (width < 1280) {
//     return vidUrl.VID960;
//   } else if (width < 1920) {
//     return vidUrl.VID1280;
//   } else if (width < 2560) {
//     return vidUrl.VID1920;
//   } else {
//     return vidUrl.VID2560;
//   }
// };

const HeroVideo = ({ className }) => {
  // const [src, setSrc] = useState(vidUrl.VID960);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setSrc(getVideoSource(window.innerWidth));
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className={cn("relative w-full h-full   ", className)}>
      <Image
        src={"/hero.jpg"}
        alt="asd"
        width={1000}
        height={500}
        className={"relative object-cover w-full  h-[80vh] md:max-h-[70vh]"}
        priority
      />
      {/* <Image
        src={"/hero.jpg"}
        alt="asd"
        width={1000}
        height={500}
        className={"relative object-cover w-full  h-[80vh] md:max-h-[70vh]"}
        priority
      />
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-br from-black/5 via-black/50 to-transparent"></div> */}
      {/* <video
        key={src}
        className={"relative object-cover w-full h-[80vh] lg:h-[80vh]"}
        autoPlay
        loop
        muted
      >
        <source src={src} type="video/mp4" />
      </video> */}
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-r from-black/70 to-black/70"></div>
      {/* <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-br from-black/5 via-black/50 to-transparent"></div> */}
      {/* <div className="absolute top-50 left-50 z-10 transform -translate-x-1/2 -translate-y-1/2 w-60% h-60% bg-gradient-to-br from-black/5 via-black/50 to-transparent"></div> */}
      {/* <div className="absolute transform -translate-x-1/2 -translate-y-1/2 w-[30%] top-1/2 lef-1/2 h-[30%] rounded-full bg-gradient-to-br from-white/20 via-white/50 to-transparent"></div> */}
    </div>
  );
};

export default HeroVideo;

// const images = [
//   {
//     id: 1,
//     src: "/HeroImgs/stadium.jpg",
//     alt: "Stadion",
//   },
//   {
//     id: 2,
//     src: "/HeroImgs/metrou.jpg",
//     alt: "Metro Train",
//   },
//   {
//     id: 3,
//     src: "/HeroImgs/fatada.jpg",
//     alt: "Building Front",
//   },
//   {
//     id: 4,
//     src: "/HeroImgs/tren.jpg",
//     alt: "Train",
//   },
// ];
// const HeroVideo = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change slide every 3 seconds (3000 milliseconds)

//     return () => {
//       clearInterval(interval);
//     };
//   }, []); // Empty dependency array ensures that effect runs once after initial render

//   return (
//     <div className="relative w-full h-full">
//       <button
//         onClick={prevImage}
//         className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full left-10 top-1/2"
//       >
//         &lt;
//       </button>
//       <button
//         onClick={nextImage}
//         className="absolute p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full right-10 top-1/2"
//       >
//         &gt;
//       </button>
//       <Image
//         src={images[currentImageIndex].src}
//         alt={images[currentImageIndex].alt}
//         width={1000}
//         height={500}
//         className="object-contain w-full h-[80vh] md:max-h-[70vh]"
//         priority
//       />
//     </div>
//   );
// };
// export default HeroVideo;
