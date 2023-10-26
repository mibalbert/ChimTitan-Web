/**
 * Categories.jsx
 */

import Card from "./Card";

const data = [
  {
    id: 1,
    title: "Mijloace de transport",
    description:
      // "Aceste produse asigură o protecție durabilă împotriva coroziunii, uzurii și a altor factori de mediu, contribuind la prelungirea duratei de viață a mijloacelor de transport.",
      "Vopseaua Industrială pentru Automobile, Protecție Durabilă și Culoare Strălucitoare.",
    linkText: "vezi produse",
    category: "transport",
    img: "/Categories/industrial-paint-car2.webp",
  },

  {
    id: 2,
    title: "Marcare rutieră",
    description:
      // "Aceste vopsele pentru marcaje rutiere sunt formulate pentru a rezista la uzura intensă, fiind capabile să suporte traficul greu și frecvent fără să se estompeze sau să se deterioreze.",
      "Aceste vopsele pentru marcaje rutiere sunt formulate pentru a rezista  frecvent fără să se estompeze sau să se deterioreze.",
    linkText: "vezi produse",
    category: "road-marking",
    img: "/Categories/autobahn.webp",
  },

  {
    id: 3,
    title: "Suprafețe din beton",
    description:
      // "Aceste produse oferă o barieră eficientă împotriva deteriorării, a umidității și a altor factori de mediu, asigurând o protecție de lungă durată pentru structurile de beton.",
      "Aceste produse oferă o barieră eficientă împotriva deteriorării, a umidității  structurile de beton.",
    linkText: "vezi produse",
    category: "concrete",
    img: "/Categories/concrete.webp",
  },
  {
    id: 4,
    title: "Suprafețe din lemn",
    description:
      // "Aceste produse oferă o protecție de lungă durată, asigurând o barieră eficientă împotriva umidității, dăunătorilor și radiațiilor UV, îmbunătățind rezistența la factorii de mediu.",
      "Aceste produse oferă o protecție de lungă durată, asigurând o barieră la factorii de mediu.",
    linkText: "vezi produse",
    category: "wood",
    img: "/Categories/wood.webp",
  },
  {
    id: 5,
    title: "Suprafețe din plastic",
    description:
      // "Acestea oferă un finisaj uniform și durabil, prevenind deteriorarea cauzată de factorii de mediu și prelungind astfel durata de viață a obiectelor din plastic.",
      "Acestea oferă un finisaj uniform și durabil, prevenind deteriorarea  durata de viață a obiectelor din plastic.",
    linkText: "vezi produse",
    category: "plastic",
    img: "/Categories/plastic.webp",
  },

  {
    id: 6,
    title: "Suprafețe metalice",
    description:
      // "Aceste produse, care pot include vopsele anticorozive, lacuri și grunduri, oferă un baraj robust împotriva umidității, substanțelor chimice și altor factori de mediu agresivi.",
      "Aceste produse oferă protecție eficientă împotriva umezelii, substanțelor chimice și agresorilor mediului.",
    linkText: "vezi produse",
    category: "metal",
    img: "/Categories/metal.webp",
  },
];

const Categories = () => {
  return (
    <div className="w-full h-full pt-20 pb-24 space-y-12 ">
      <div className="max-w-screen-xl mx-auto font-serif text-3xl text-center">
        Select your industry
      </div>
      <div className="w-full py-8 mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 ">
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              linkText={item.linkText}
              imgSrc={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
