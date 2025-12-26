import React from "react";

const StepReview = ({ data, onBack, onSubmit }) => {
  const {
    pickupAddress,
    pickupDateTime,
    deliveryAddress,
    deliveryDateTime,
    parcelType,
    parcelWeight,
    selectedPartnerName,
    priceQuote,
  } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">
        Review & Confirm
      </h2>

      <div className="border rounded-xl px-4 py-3 text-sm space-y-2">
        <p className="font-semibold text-gray-800">Pickup</p>
        <p className="text-gray-700">{pickupAddress}</p>
        <p className="text-[11px] text-gray-500">{pickupDateTime}</p>
      </div>

      <div className="border rounded-xl px-4 py-3 text-sm space-y-2">
        <p className="font-semibold text-gray-800">Delivery</p>
        <p className="text-gray-700">{deliveryAddress}</p>
        <p className="text-[11px] text-gray-500">{deliveryDateTime}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="border rounded-xl px-4 py-3 text-sm space-y-1">
          <p className="font-semibold text-gray-800">Parcel</p>
          <p className="text-gray-700">{parcelType || "—"}</p>
          <p className="text-[11px] text-gray-500">
            Weight: {parcelWeight || "—"} kg
          </p>
        </div>
        <div className="border rounded-xl px-4 py-3 text-sm space-y-1">
          <p className="font-semibold text-gray-800">Partner</p>
          <p className="text-gray-700">
            {selectedPartnerName || "Not selected"}
          </p>
          <p className="text-[11px] text-gray-500">
            Estimated price: {priceQuote || "—"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-600">
        <input type="checkbox" required className="w-3 h-3" />
        <span>I agree to the terms and conditions.</span>
      </div>

      <div className="flex justify-between pt-2">
        <button
          type="button"
          onClick={onBack}
          className="text-sm px-4 py-2 rounded-full border border-gray-300 text-gray-700"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white text-sm px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Confirm & Create Request
        </button>
      </div>
    </form>
  );
};

export default StepReview;
