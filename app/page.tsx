import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import DynamicGrid from "@/components/DynamicGrid";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <main className="relative bg-black-100  flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems}/>
      <Hero />
      <DynamicGrid />
      <RecentProjects />
      <Clients />
      <Experience />
      <Approach />
      <Footer />
      <p className="text-foreground text-base">TEST</p>
    </div>
   </main>
  );
}
