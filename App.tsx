import React from "react";
import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import RoomsPricing from "./components/RoomsPricing";
import Facilities from "./components/Facilities";
import Food from "./components/Food";
import HygieneSafety from "./components/HygieneSafety";
import Gallery from "./components/Gallery";
import LocationSection from "./components/Location";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { NavItem } from "./types";

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Why Us", href: "#why" },
  { label: "Rooms", href: "#rooms" },
  { label: "Facilities", href: "#facilities" },
  { label: "Food", href: "#food" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-orange-500 selection:text-white font-sans">
      <Header navItems={navItems} />
      <main className="overflow-hidden">
        <section id="home">
          <Hero />
        </section>

        <section id="why" className="scroll-mt-20">
          <WhyChooseUs />
        </section>

        <section id="rooms" className="scroll-mt-20">
          <RoomsPricing />
        </section>

        <section id="facilities" className="scroll-mt-20">
          <Facilities />
        </section>

        <section id="food" className="scroll-mt-20">
          <Food />
        </section>

        <section id="hygiene" className="scroll-mt-20">
          <HygieneSafety />
        </section>

        <section id="gallery" className="scroll-mt-20">
          <Gallery />
        </section>

        <section id="location" className="scroll-mt-20">
          <LocationSection />
        </section>

        <section id="reviews" className="scroll-mt-20">
          <Reviews />
        </section>

        <section id="faq" className="scroll-mt-20">
          <FAQ />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;