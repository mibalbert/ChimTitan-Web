/**
 * AboutUs.jsx
 */

import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full pt-20 space-y-16 pb-28">
      <div className="w-full mx-auto font-serif text-3xl text-center max-w-7xl">
        Who are we?
      </div>
      <div className="grid w-full max-w-6xl grid-cols-2 gap-20 mx-auto">
        <div className="relative col-span-2 py-10 text-4xl rounded-lg bg-zinc-100 md:col-span-1">
          <div className="font-serif text-2xl font-semibold text-center">
            30 Years
          </div>
          <div className="w-full h-32">
            <Image
              src="/produs-in-romania-removebg.png"
              width={500}
              height={500}
              alt={"logo"}
              className="object-contain object-center w-full h-full "
            />
          </div>
        </div>
        <div className="flex items-center col-span-2 md:col-span-1">
          Cu o experiență de peste trei decenii în industrie, CHIMTITAN este un
          nume de încredere și inovație în lumea materialelor peliculogene din
          România. Timp de 30 de ani, am ridicat standardele performanței și
          calității, consolidându-ne poziția ca un lider de necontestat pe piața
          locală. Ne mândrim cu excelența noastră, oferind soluții inovatoare și
          durabile pentru nevoile variate ale clienților noștri. Fie că este
          vorba despre industria ambalajelor, producția de textile sau alte
          domenii, CHIMTITAN este sinonim cu fiabilitatea și eficiența.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
