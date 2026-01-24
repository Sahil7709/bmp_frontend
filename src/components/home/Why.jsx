import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Why = () => {
  return (
    <>
        <section className="py-18 bg-[#FFFDF6]">
      <div className="max-w-7xl mx-auto px-4">

        {/* FULL BORDER CONTAINER */}
        <div className="relative rounded-2xl border-2 border-blue-300 bg-gradient-to-r from-blue-600 to-blue-500 text-white overflow-hidden">

          {/* CONTENT WRAPPER */}
          <div className="relative z-10 px-10 py-14">
            <div className="grid lg:grid-cols-5 gap-10 items-start">

              {/* LEFT TITLE */}
              <div className="lg:col-span-2">
                <h2 className="text-4xl font-bold leading-tight mb-4">
                  Why <br /> Choose Us?
                </h2>
                <p className="text-sm opacity-90">
                  Book My Parcel makes delivery smarter, safer, and faster by
                  connecting you with verified travelers already moving along
                  your route.
                </p>
              </div>

              {/* FEATURES */}
              <div className="lg:col-span-3 grid md:grid-cols-4 gap-8">
                {[
                  "Fast & Flexible Deliveries",
                  "Verified & Trusted Partners",
                  "Real Time Tracking",
                  "Secure OTP Based Handover",
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-lg font-bold">{i + 1}</span>
                    </div>
                    <h4 className="font-semibold text-sm mb-2">
                      {item}
                    </h4>
                    <p className="text-xs opacity-90">
                      Reliable, secure and customer-first delivery experience.
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>      
    </>
  )
}

export default Why
