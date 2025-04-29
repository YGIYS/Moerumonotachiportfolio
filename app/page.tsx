import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import { navItems } from "@/data";
import Grid from "./components/Grid";
import Services from "./components/Services";

  import Contact from "./components/Contact";
import MiApproach from "./components/MiApproach";
import Proj from "./components/Proj";
import Stak from "./components/Stak";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import MobileNavBae from "./components/MobileNavBae";
export default function Home() {
  return (
    <main className="relative  flex justify-center items-center flex-col overflow-hidden mx-auto  px-5">
      <div className="max-w-7xl w-full">
        <section className="hidden md:flex lg:flex  sm:hidden">
          <FloatingNav navItems={navItems} />
        </section>
        <MobileNavBae />
        <Hero />
        <Grid />

        <Services />
        <Proj />
        <Stak />
        <MiApproach />
        <Contact />

        <ScrollToTop />
        <Footer />
      </div>
    </main>
  );
}
