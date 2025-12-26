import { useEffect, useState } from "react";

/* =====================================================
   FAQ SECTION
===================================================== */
export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const faqs = [
    {
      q: "How does Book My Parcel work?",
      a: "Book My Parcel connects customers with verified travelers who deliver parcels along their travel route. You book, choose a delivery partner, and track your parcel in real time.",
    },
    {
      q: "Is it safe to send parcels through travelers?",
      a: "Yes. All travelers are verified, and OTP-based pickup and delivery ensure secure parcel handover.",
    },
    {
      q: "Can I track my parcel during delivery?",
      a: "Absolutely. You can track your parcel with real-time GPS updates from pickup to drop-off.",
    },
    {
      q: "What items are restricted from shipping?",
      a: "Illegal goods, hazardous materials, and perishable items are restricted from shipping.",
    },
  ];

  return (
    <section className="py-14 bg-[#FFFDF6]">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-semibold text-blue-600 leading-tight">
            Frequently asked
            <br />
            <span className="text-gray-900 font-bold">Questions</span>
          </h2>

          <p className="mt-6 text-sm text-gray-600 max-w-md">
            Have questions about what and how Book My Parcel works? We’ve put
            together a list of the most common queries to help you understand
            our process.
          </p>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`rounded-xl shadow-md transition-all duration-300 ${
                  isOpen
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                {/* QUESTION */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left"
                >
                  <span className="font-medium text-sm">
                    {`${i + 1}. ${item.q}`}
                  </span>

                  <span
                    className={`h-6 w-6 flex items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "bg-white text-blue-600 rotate-180"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    ˄
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "max-h-40 px-6 pb-5 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm leading-relaxed opacity-90">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
