import Aboutus from "../../components/home/Aboutus";
import FAQs from "../../components/home/FAQS";
import Hero from "../../components/home/Hero";
import HowBook from "../../components/home/Howbook";
import WhyChooseUs from "../../components/home/Whychooseus";


/* =====================================================
   HOME PAGE
===================================================== */
export default function Home() {
  return (
    <main className="bg-[#FFFDF6] overflow-hidden">
      <Hero />
      <HowBook />
      <WhyChooseUs />
      <Aboutus/>
      <FAQs />
      
    </main>
  );
}
