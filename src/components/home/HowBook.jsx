import Step1Img from "../../assets/homeimage/parcel1.png";
import Step2Img from "../../assets/homeimage/parcel2.png";
import Step3Img from "../../assets/homeimage/parcel3.png";
import Step4Img from "../../assets/homeimage/parcel4.png";

import { FaBook, FaShieldAlt } from "react-icons/fa";
import { MdLock, MdTrackChanges } from "react-icons/md";

/* =====================================================
   STEPS DATA
===================================================== */
const steps = [
  {
    title: "Book Your Parcel",
    desc: "Users enter pickup & drop details, add parcel info, and confirm the request in just a few taps.",
    img: Step1Img,
    icon: FaBook,
  },
  {
    title: "Get Matched With Delivery Partner",
    desc: "Our system finds verified delivery partners traveling on the same route.",
    img: Step2Img,
    icon: FaShieldAlt,
  },
  {
    title: "Secure Pickup With OTP",
    desc: "Parcel pickup is secured with OTP verification for complete safety.",
    img: Step3Img,
    icon: MdLock,
  },
  {
    title: "Track & Receive Parcel",
    desc: "Track your parcel in real-time and receive it safely at destination.",
    img: Step4Img,
    icon: MdTrackChanges,
  },
];

/* =====================================================
   HOW BOOK MY PARCEL WORKS
===================================================== */
export default function HowBook() {
  return (
    <section className="relative py-20 bg-[#FFFDF6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-2">
          <span className="text-blue-600">How Book My Parcel</span>{" "}
          <span className="text-gray-900">Works?</span>
        </h2>

        {/* Curved dotted path */}
        <svg
          className="absolute top-[260px] left-1/2 -translate-x-1/2 hidden lg:block pointer-events-none"
          width="420"
          height="2000"
          viewBox="0 0 420 2000"
          fill="none"
        >
          <path
            d="
              M250 140
              C500 390, 260 520, 100 700
              C400 680, 60 860, 210 1040
              C360 1180, 300 1280, 260 1400
              C180 1500, 10 1300, 100 1600
            "
            stroke="#2563EB"
            strokeWidth="3"
            strokeDasharray="1 12"
            strokeLinecap="round"
          />
        </svg>

        {/* Steps */}
        <div className="space-y-32 mt-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`flex justify-center ${
                  i % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="max-w-[420px] w-full"
                />
              </div>

              {/* Content */}
              <div
                className={`flex ${
                  i % 2 === 1
                    ? "lg:justify-end lg:col-start-1"
                    : "lg:justify-start"
                }`}
              >
                <div className="bg-blue-600 text-white rounded-2xl p-8 max-w-md shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon size={24} />
                    <h3 className="text-lg font-semibold">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed opacity-95">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-20 flex justify-start">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition">
            Send parcel
          </button>
        </div>

      </div>
    </section>
  );
}
