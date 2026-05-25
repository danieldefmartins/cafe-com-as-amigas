import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MagazineStrip from "@/components/MagazineStrip";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Pillars from "@/components/Pillars";
import Scripture from "@/components/Scripture";
import Proverbs from "@/components/Proverbs";
import Events from "@/components/Events";
import Podcast from "@/components/Podcast";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MagazineStrip />
      <About />
      <Founder />
      <Pillars />
      <Scripture />
      <Proverbs />
      <Events />
      <Podcast />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
