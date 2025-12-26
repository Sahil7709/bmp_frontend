import React from 'react'
import { useState } from 'react';
import travelerImg from '../../assets/travelerhome/img1.png';
import img2 from '../../assets/travelerhome/img2.png';
import { LuDollarSign } from "react-icons/lu";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { FaRegStar } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { VscWorkspaceTrusted } from "react-icons/vsc";


const TravelerHomes = () => {


  const faqs = [
    {
      id: 1,
      question: "What document do I need to submit?",
      answer:
        "You need a valid driving license, Aadhaar or similar ID proof, vehicle documents, and a smartphone with internet connection. You’ll also need your own two-wheeler for deliveries."
    },
    {
      id: 2,
      question: "How much can I earn?",
      answer:
        "Your earnings depend on completed deliveries, distance, and bonuses. Regular partners can earn a stable monthly income with peak-hour incentives."
    },
    {
      id: 3,
      question: "How do I get paid?",
      answer:
        "Payments are settled weekly or bi‑weekly directly to your bank account, and you can track every payout in the app."
    },
    {
      id: 4,
      question: "Do I need my own vehicle?",
      answer:
        "Yes, you need a two‑wheeler in good condition with valid documents to complete deliveries efficiently."
    }
  ];

  const [activeFaq, setActiveFaq] = useState(1);

  const toggleFaq = (id) => {
    setActiveFaq((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {/* <div className="min-h-screen bg-[#FBFBFF] flex items-center"> */}
      {/* <div className="w-full px-6 lg:px-12 mt-[-70px] "> */}
      {/* <div className="grid lg:grid-cols-[1.2fr,1.4fr] gap-10 items-center"> */}
      {/* LEFT */}
      {/* <div className="space-y-6">
              <h1 className="text-5xl font-bold text-[#294CFF] leading-tight">
                Deliver Earn <br />
                <span>Grow</span>
              </h1>

              <p className="text-gray-500 text-base max-w-md">
                Take control of your earnings by delivering parcels along your
                daily travel route. With Book My Parcel, simply pick parcels that
                match your route. It’s flexible, effortless, and designed to fit
                perfectly into your everyday schedule.
              </p>

              <button className="inline-flex items-center bg-[#294CFF] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 transition">
                Join Our Delivery Team
              </button>

              <div className="grid grid-cols-3 gap-8 pt-4">
                <div>
                  <p className="text-2xl font-bold text-[#294CFF]">50K+</p>
                  <p className="text-xs text-gray-500 mt-1">Active Partners</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#294CFF]">₹45K</p>
                  <p className="text-xs text-gray-500 mt-1">Avg. Monthly Earning</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#294CFF]">12+</p>
                  <p className="text-xs text-gray-500 mt-1">Cities</p>
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <button className="bg-[#294CFF] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-700 transition">
                  Join now
                </button>
                <button className="border border-[#294CFF] text-[#294CFF] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-50 transition">
                  Explore more
                </button>
              </div>
            </div> */}

      {/* RIGHT */}
      {/* <div className="flex justify-center lg:justify-end pt-4 lg:pt-10">
              <img
                src={travelerImg}
                alt="Traveler Illustration"
                className="w-full max-w-4xl"
              />
            </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}

      <div className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 align-items-left px-4">



          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-[#294CFF] leading-tight">
              Deliver Earn <br />
              <span>Grow</span>
            </h1>


            <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto md:mx-0">
              Take control of your earnings by delivering parcels along your daily
              travel route. With Book My Parcel, simply pick parcels that match
              your route. It’s flexible, effortless, and designed to fit perfectly
              into your everyday schedule.
            </p>


            <button className="bg-[#294CFF] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 transition">
              Join Our Delivery Team
            </button>


            <div className="grid grid-cols-3 gap-6 text-center md:text-left mt-4">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-[#294CFF]">50K+</p>

                <p className="text-sm tracking-wide text-gray-800">
                  Active Partners
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-[#294CFF]">₹45K</p>

                <p className="text-sm  tracking-wide text-gray-800">
                  Avg. Monthly Earning
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-[#294CFF]">12+</p>

                <p className="text-sm tracking-wide text-gray-800">
                  Cities
                </p>
              </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
              <button className="bg-[#294CFF] text-white px-7 py-3 rounded-md text-sm font-medium hover:bg-indigo-700 transition">
                Join Now
              </button>
              <button className="border border-[#294CFF] text-[#294CFF] px-7 py-3 rounded-md text-sm font-medium hover:bg-indigo-50 transition">
                Explore More
              </button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={travelerImg}
              alt="Traveler Illustration"
              className="w-[100%]"
            />
          </div>

        </div>
      </div>


      {/* Bottom feature cards */}
      <div className="w-full flex justify-center pb-10 mt-[-100px]">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-0  ">
          <div className="flex items-center gap-4 rounded-2xl border border-[#294CFF] shadow-[0_0_0_1px_rgba(0,0,0,0.04)] bg-blue-50 px-6 py-5">
            <div className="w-20 h-10 flex items-center justify-center rounded-md bg-[#294CFF] text-white border-2 border-white">
              <LuDollarSign />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#294CFF]">
                Fuel Reimbursement
              </h3>
              <p className="text-[12px] text-blue-500 mt-1">
                Get reimbursed for fuel costs. Average ₹3,000–4,000 monthly fuel
                allowance included.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-blue-50 rounded-2xl border border-[#294CFF] shadow-[0_0_0_1px_rgba(0,0,0,0.04)] px-6 py-5">
            <div className="w-20 h-10 flex items-center justify-center rounded-md bg-[#294CFF] text-white border-2 border-white">
              <HiArrowTrendingUp />

            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#294CFF]">
                Bonus Incentives
              </h3>
              <p className="text-[12px] text-blue-500 mt-1">
                Earn up to ₹5,000 extra per month with performance bonuses and
                peak hour incentives.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-blue-50 rounded-2xl border border-[#294CFF] shadow-[0_0_0_1px_rgba(0,0,0,0.04)] px-6 py-5">
            <div className="w-20 h-10 flex items-center justify-center rounded-md bg-[#294CFF] text-white border-2 border-white">
              <FaRegStar />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#294CFF]">
                Top Performer Rewards
              </h3>
              <p className="text-[12px] text-blue-500 mt-1">
                Monthly recognition and additional rewards for our highest-rated
                delivery partners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*left right section */}

      <section className="w-full bg-[#FBFBFF] py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 md:px-0">

          {/* LEFT: Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={img2}
              alt="Traveler"
              className="w-full md:w-[120%] lg:w-[140%] rounded-xl"
            />
          </div>

          {/* RIGHT: Heading + description + cards */}
          <div className="w-full md:rounded-lg px-4 md:px-8 py-8 md:py-10 bg-white">
            {/* Heading + description */}
            <div className="space-y-4 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#294CFF]">
                Why Join <br />
                <span>Book My Parcel?</span>
              </h2>

              <p className="text-gray-600 text-sm md:text-base max-w-xl">
                Experience the benefits of being part of India&apos;s fastest‑growing
                delivery network.
              </p>
            </div>

            {/* 2x2 GRID CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {/* Card 1 */}
              <div className="bg-white border border-[#294CFF] rounded-2xl px-6 py-6 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="w-11 h-11 flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#4C8DFF] to-[#294CFF] text-white">
                    <LuDollarSign className="text-xl" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#294CFF]">₹450</p>
                    <p className="text-xs text-gray-500">Avg. per day</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs font-semibold text-[#294CFF] uppercase tracking-wide">
                    Flexible Earnings
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Earn ₹15,000 – ₹45,000 per month.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-[#294CFF] rounded-2xl px-6 py-6 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="w-11 h-11 flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#4C8DFF] to-[#294CFF] text-white">
                    <GoClock  className="text-xl" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#294CFF]">24/7</p>
                    <p className="text-xs text-gray-500">Flexibility</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs font-semibold text-[#294CFF] uppercase tracking-wide">
                    Work On Your Time
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Choose your own hours.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-[#294CFF] rounded-2xl px-6 py-6 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="w-11 h-11 flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#4C8DFF] to-[#294CFF] text-white">
                    <VscWorkspaceTrusted  className="text-xl" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#294CFF]">₹5L</p>
                    <p className="text-xs text-gray-500">Coverage</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs font-semibold text-[#294CFF] uppercase tracking-wide">
                    Insurance Coverage
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Full protection on the job.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white border border-[#294CFF] rounded-2xl px-6 py-6 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="w-11 h-11 flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#4C8DFF] to-[#294CFF] text-white">
                    < HiArrowTrendingUp className="text-xl" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#294CFF]">7 Days</p>
                    <p className="text-xs text-gray-500">Payment cycle</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xs font-semibold text-[#294CFF] uppercase tracking-wide">
                    Weekly Payouts
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Get paid every week.
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Start in 4 Simple Steps section */}
      <section className="w-full bg-[#EEB15F] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-0 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Start in 4 Simple Steps
          </h2>
          <p className="text-sm md:text-base text-white/80 mt-3">
            From registration to your first delivery in less than 3 days.
          </p>

          {/* Timeline + cards */}
          <div className="mt-10 relative">
            {/* Horizontal line */}
            <div className="hidden md:block absolute left-0 right-0 top-7 h-[2px] bg-white/60"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-5 relative">
              {/* Step 1 */}
              <div className="flex flex-col items-center gap-4">
                {/* Step circle */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md text-sm font-semibold text-gray-800 z-10">
                  1
                </div>
                {/* Card */}
                <div className="w-full bg-white rounded-2xl shadow-md px-6 py-6 text-left">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 mb-3">
                    {/* icon placeholder */}
                    <span className="text-lg">👤</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Sign Up Online
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-2">
                    Create your account and upload required documents.
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1 text-[11px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    5 mins
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md text-sm font-semibold text-gray-800 z-10">
                  2
                </div>
                <div className="w-full bg-white rounded-2xl shadow-md px-6 py-6 text-left">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 mb-3">
                    <span className="text-lg">🛡️</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Document Verification (KYC)
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-2">
                    We verify your driving license and ID documents.
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1 text-[11px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    24–48 hrs
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md text-sm font-semibold text-gray-800 z-10">
                  3
                </div>
                <div className="w-full bg-white rounded-2xl shadow-md px-6 py-6 text-left">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 mb-3">
                    <span className="text-lg">🎓</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Training & Onboarding
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-2">
                    Complete online training and app walkthrough.
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1 text-[11px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    2 hrs
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md text-sm font-semibold text-gray-800 z-10">
                  4
                </div>
                <div className="w-full bg-white rounded-2xl shadow-md px-6 py-6 text-left">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 mb-3">
                    <span className="text-lg">⚡</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    Start Delivering
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-2">
                    Accept orders and start earning immediately.
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1 text-[11px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Instant
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA button */}
          <div className="mt-10 flex justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-gray-50 transition">
              Get Started Today
            </button>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="w-full bg-white px-0 md:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4 md:px-0 items-start">
          {/* LEFT: Title + description */}
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl text-[#294CFF] leading-tight">
              Frequently asked <br />
              <span className="text-[#294CFF]  font-bold">Questions</span>
            </h2>

            <p className="text-sm md:text-base text-gray-600 max-w-md">
              <b>Have questions about what and how Book My Parcel works?</b> We’ve put
              together a list of the most common queries to help you understand our
              process, safety measures, and features.
            </p>

            <p className="text-sm md:text-base text-gray-600 max-w-md">
              Whether you’re sending a parcel or becoming a traveler, these FAQs guide
              you through everything you need for a smooth and secure experience.
            </p>
          </div>

          {/* RIGHT: Interactive FAQ list */}
          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isActive = activeFaq === item.id;
              const number = index + 1;

              return (
                <div
                  key={item.id}
                  className={
                    isActive
                      ? "rounded-2xl bg-gradient-to-r from-[#294CFF] to-[#4B7BFF] text-white shadow-xl p-[1px]"
                      : "rounded-2xl bg-white shadow-md"
                  }
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left rounded-2xl"
                  >
                    <div className="flex flex-col gap-1">
                      <span
                        className={
                          "text-[11px] font-semibold " +
                          (isActive ? "text-white/80" : "text-[#294CFF]")
                        }
                      >
                        {number}.
                      </span>
                      <p
                        className={
                          "text-sm font-semibold " +
                          (isActive ? "text-white" : "text-gray-900")
                        }
                      >
                        {item.question}
                      </p>
                    </div>

                    <div
                      className={
                        "w-7 h-7 flex items-center justify-center rounded-full " +
                        (isActive
                          ? "bg-white/15 text-white"
                          : "bg-[#F3F4FF] text-[#294CFF]")
                      }
                    >
                      <span
                        className={
                          "text-lg leading-none transition-transform " +
                          (isActive ? "rotate-180" : "")
                        }
                      >
                        ⌃
                      </span>
                    </div>
                  </button>

                  {isActive && (
                    <div className="px-6 pb-4">
                      <p
                        className={
                          "text-[11px] leading-relaxed mt-1 " +
                          (isActive ? "text-white/90" : "text-gray-600")
                        }
                      >
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TravelerHomes
