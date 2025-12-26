import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// IMAGES
import HeroPerson from "../../assets/homeimage/delivery.png";
import Aircraft from "../../assets/homeimage/Aircraft.png";
import Train from "../../assets/homeimage/train.png";
import Bus from "../../assets/homeimage/bus.png";
import bike from "../../assets/homeimage/cuate.png";

/* =====================================================
   ANIMATION CONFIG
===================================================== */
const animation = {
  initial: { x: "120%", opacity: 1 },
  animate: { x: "-120%", opacity: 1 },
  exit: { opacity: 1 },
  transition: {
    duration: 5,
    ease: "linear",
  },
};

/* =====================================================
   HERO SECTION (ONLY HERO)
===================================================== */
export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#FFFDF6]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-[42px] leading-tight font-bold">
            <span className="text-blue-600">Speed</span>{" "}
            <span className="text-[#1F2937]">You Can</span>
            <br />
            <span className="text-[#1F2937]">Count On</span>
          </h1>

          <p className="mt-4 max-w-md text-gray-500 text-sm leading-relaxed">
            Book My Parcel is a smart delivery platform that connects customers
            with verified delivery partners for fast, affordable, and reliable
            parcel delivery.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-medium">
              Send parcel
            </button>
            <button className="border border-blue-600 text-blue-600 px-5 py-2.5 rounded-md text-sm font-medium">
              Track delivery
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 max-w-sm">
            {[
              { value: "30K+", label: "Orders Delivered safely" },
              { value: "40K+", label: "Loyal customers" },
              { value: "27+", label: "Locations Covered" },
              { value: "20K+", label: "Delivery partners" },
            ].map((item, i) => (
              <div key={i} className="bg-blue-600 text-white p-4 rounded-xl">
                <p className="text-lg font-bold">{item.value}</p>
                <p className="text-xs opacity-90 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-end h-[480px]">
          <div className="relative w-full max-w-xl overflow-hidden">
            <BackgroundAnimation />

            <img
              src={HeroPerson}
              alt="Delivery"
              className="relative z-20 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   BACKGROUND ITEMS
===================================================== */
const items = [
  { id: 1, src: Aircraft, className: "top-8 w-[530px]" },
  { id: 2, src: Bus, className: "bottom-16 w-[500px]" },
  { id: 3, src: bike, className: "bottom-28 w-[400px]" },
  { id: 4, src: Train, className: "bottom-28 w-[600px]" },
];

/* =====================================================
   BACKGROUND ANIMATION
===================================================== */
const BackgroundAnimation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={items[index].id}
          src={items[index].src}
          className={`absolute ${items[index].className}`}
          {...animation}
        />
      </AnimatePresence>
    </div>
  );
};
