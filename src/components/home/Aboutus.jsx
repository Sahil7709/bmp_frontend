import { useEffect, useState } from "react";

/* =====================================================
   ABOUT US / TESTIMONIALS
===================================================== */
export default function Aboutus() {
  return (
    <section className="py-20 bg-[#FFFDF6]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-blue-600 leading-tight">
          What Clients Says
          <br />
          <span className="text-gray-900 font-bold">About Us</span>
        </h2>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg flex gap-6"
            >
              {/* Avatar */}
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="user"
                className="h-14 w-14 rounded-full object-cover"
              />

              {/* Content */}
              <div className="relative">
                {/* Quote Icon */}
                <span className="absolute -top-6 right-0 text-6xl text-blue-600 leading-none">
                  “
                </span>

                <h4 className="font-semibold text-gray-900 mb-2">
                  Loved the product!
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <p className="font-semibold text-sm text-gray-900">
                  Maverick
                </p>
                <p className="text-xs text-gray-500">User</p>

                {/* Social Icons */}
                <div className="flex gap-3 mt-3 text-gray-500">
                  <span className="h-5 w-5 bg-gray-200 rounded-full" />
                  <span className="h-5 w-5 bg-gray-200 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
