/**
 * AboutUs.jsx
 */

import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="w-full pb-20 space-y-10 pt-14">
      <div className="w-full mx-auto font-serif text-3xl text-center max-w-7xl">
        Who are we?
      </div>
      <div className="grid w-full grid-cols-2 mx-auto max-w-7xl">
        <div className="relative col-span-2 px-10 text-4xl border-r border-zinc-400 md:col-span-1">
          <div className="font-serif text-xl font-semibold text-center">
            30 Years
          </div>
          <hr className="w-20 mx-auto my-3 border-zinc-400 " />
          <div className="w-full h-24">
            <Image
              src="/produs-in-romania-removebg.png"
              width={500}
              height={500}
              alt={"logo"}
              className="object-contain object-center w-full h-full "
            />
          </div>
        </div>
        <div className="flex flex-col items-center col-span-2 px-20 space-y-5 md:col-span-1">
          <div>
            Cu o experiență de peste trei decenii în industrie, CHIMTITAN este
            un nume de încredere și inovație în lumea materialelor peliculogene
            din România. Timp de 30 de ani, am ridicat standardele performanței
            și calității, consolidându-ne poziția ca un lider de necontestat pe
            piața locală.
          </div>
          <Link href="/about-us" className="w-full ">{`Descopera ->`}</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
