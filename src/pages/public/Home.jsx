import Aboutus from "../../components/home/Aboutus";
import FAQs from "../../components/home/FAQS";
import Hero from "../../components/home/Hero";
import HowBook from "../../components/home/Howbook";
import Why from "../../components/home/Why";


/* =====================================================
   HOME PAGE
===================================================== */
export default function Home() {
  return (
    <main className="bg-[#FFFDF6] overflow-hidden">
      <Hero />
      <HowBook />
      <Why/>
      <Aboutus/>
      <FAQs />
      
    </main>
  );
}