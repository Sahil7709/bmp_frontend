// src/pages/user/requestform/OrderSummary.jsx
import React from "react";

const OrderSummary = ({ data }) => {
  return (
    <aside className="border border-[#D0E5FF] bg-white rounded-2xl shadow-sm p-4 md:p-5 h-fit">
      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-900 mb-3">
        Order Summary
      </h3>

      {/* Header image */}
      <div className="overflow-hidden rounded-xl mb-4">
        <img
          src="https://images.pexels.com/photos/6169663/pexels-photo-6169663.jpeg"
          alt="Fast & Secure Delivery"
          className="w-full h-28 object-cover"
        />
        <div className="px-3 py-2 bg-gradient-to-r from-black/70 to-black/10 text-[10px] text-white flex items-center justify-between -mt-8 relative z-10">
          <span className="font-medium">Fast &amp; Secure</span>
          <span className="opacity-80">Delivery guaranteed</span>
        </div>
      </div>

      {/* Pickup card */}
      <div className="mb-4">
        <p className="text-[11px] uppercase tracking-wide text-gray-400 mb-1">
          Pickup details
        </p>
        <div className="bg-gradient-to-b from-[#F8F4FF] to-[#F5F8FF] rounded-xl px-4 py-3 text-xs text-gray-700 space-y-1">
          <p className="font-medium">
            Address:{" "}
            <span className="font-normal">
              {data.pickupAddress || "Not filled yet"}
            </span>
          </p>
          <p>
            <span className="font-medium">Contact name: </span>
            {data.senderName || "—"}
          </p>
          <p>
            <span className="font-medium">Phone number: </span>
            {data.pickupPhone || "—"}
          </p>
          <p>
            <span className="font-medium">Alternate phone number: </span>
            {data.pickupAltPhone || "—"}
          </p>
        </div>
      </div>

      {/* Delivery card */}
      <div className="mb-4">
        <p className="text-[11px] uppercase tracking-wide text-gray-400 mb-1">
          Delivery details
        </p>
        <div className="bg-gradient-to-b from-[#F8F4FF] to-[#F5F8FF] rounded-xl px-4 py-3 text-xs text-gray-700 space-y-1">
          <p className="font-medium">
            Address:{" "}
            <span className="font-normal">
              {data.deliveryAddress || "Not filled yet"}
            </span>
          </p>
          <p>
            <span className="font-medium">Contact name: </span>
            {data.receiverName || data.senderName || "—"}
          </p>
          <p>
            <span className="font-medium">Phone number: </span>
            {data.deliveryPhone || "—"}
          </p>
          <p>
            <span className="font-medium">Alternate phone number: </span>
            {data.deliveryAltPhone || "—"}
          </p>
        </div>
      </div>

      {/* Price gradient card */}
      <div className="mb-4 bg-gradient-to-r from-[#294CFF] to-[#4F8CFF] rounded-2xl px-4 py-4 text-white shadow-md">
        <p className="text-[11px] uppercase tracking-wide mb-1 opacity-80">
          Estimated Price
        </p>
        <p className="text-2xl font-bold">
          ₹{data.priceQuote || "150"}
        </p>
        <p className="text-[11px] mt-1 opacity-80">
          Includes all taxes &amp; fees
        </p>
      </div>

      {/* Feature bullets */}
      <ul className="space-y-1.5 text-[11px] text-gray-600">
        <li className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
          Real‑time tracking
        </li>
        <li className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-400 inline-block" />
          On‑time delivery
        </li>
        <li className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
          Transparent pricing
        </li>
      </ul>
    </aside>
  );
};

export default OrderSummary;


