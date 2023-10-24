/**
 * page.jsx
 */

import AboutUs from "@/components/Home/AboutUs";
import Categories from "@/components/Home/Categories";
import Hero from "@/components/Home/Hero";
import OurPartners from "@/components/Home/OurPartners";
import RecomendedProducts from "@/components/Home/RecomendedProducts";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutUs />
      <Categories />
      <OurPartners />
      <RecomendedProducts />
    </main>
  );
}
