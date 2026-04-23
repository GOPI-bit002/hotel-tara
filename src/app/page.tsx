import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Navbar from "@/components/Navbar";
import Rooms from "@/components/Rooms";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Featured />
        <Amenities />
        <Gallery />
        <Location />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
