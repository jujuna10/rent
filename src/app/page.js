import Book from "@/components/Book";
import CarCarousel from "@/components/CarCarousel";
import Cities from "@/components/Cities";
import Client from "@/components/Client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Statistic from "@/components/Statistic";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="relative bg-black overflow-x-hidden flex flex-col gap-12">
      {/* ოქროსფერი რბილი ლაქა მარცხენა ზედა კუთხეში */}
      <div className="absolute top-[-25%] left-[-12%] w-[700px] h-[700px] bg-[radial-gradient(circle,_#998543_0%,_transparent_70%)] opacity-30 blur-2xl pointer-events-none" />

      {/* კონტენტი */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
      </div>
      <Statistic />
      <Cities />
      <Services />
      <CarCarousel />
      <WhyChoose />
      <Client />
      <Book />
      <Footer />
    </div>

  );
}
