/**
 * Card.jsx
 */

import Image from "next/image";
import Link from "next/link";

const Card = ({ title, description, linkText, imgSrc }) => {
  return (
    <Link
      href={"/"}
      className="relative max-h-[500px] h-full flex flex-col bg-white "
    >
      <Image
        src={imgSrc}
        width={500}
        height={500}
        alt={title}
        className="w-full h-full max-h-[60%] object-cover"
      />
      <div className="absolute w-full h-[60%] top-0 left-0 bg-gradient-to-br from-white/10 via-transparent to-transparent z-50"></div>
      <div className="h-full max-h-[40%] p-8 gap-4 flex flex-col bg-zinc-100">
        <h2 className="font-serif text-3xl">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <div>{`Descopera ->`}</div>
      </div>
    </Link>
  );
};

export default Card;
