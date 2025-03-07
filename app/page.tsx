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
export default function Home() {
  return (
    <main className="relative  flex justify-center items-center flex-col overflow-hidden mx-auto  px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid />

        <Services />
        < Proj />
        < Stak />
        <MiApproach/>
        <Contact />
        
        <ScrollToTop />
        <Footer />
      </div>
    </main>
  );
}
