// src/pages/user/requestform/StepPartner.jsx
import React from "react";

const mockPartners = [
  { id: "p1", name: "FastExpress", eta: "30-40 mins", price: "₹120" },
  { id: "p2", name: "SaverDelivery", eta: "45-60 mins", price: "₹90" },
];

const StepPartner = ({ data, updateFields, onNext, onBack }) => {
  const { selectedPartnerId } = data;

  const handleNext = (e) => {
    e.preventDefault();
    if (!selectedPartnerId) return;
    onNext();
  };

  const onSelect = (partner) => {
    updateFields({
      selectedPartnerId: partner.id,
      selectedPartnerName: partner.name,
      priceQuote: partner.price,
    });
  };

  return (
    <form onSubmit={handleNext} className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Select Partner</h2>

      <div className="space-y-3">
        {mockPartners.map((p) => {
          const isSelected = selectedPartnerId === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelect(p)}
              className={`w-full flex justify-between items-center border rounded-xl px-4 py-3 text-left text-sm
                ${
                  isSelected
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 bg-white"
                }`}
            >
              <div>
                <p className="font-semibold text-gray-900">{p.name}</p>
                <p className="text-[11px] text-gray-500">ETA: {p.eta}</p>
              </div>
              <span className="text-sm font-semibold text-blue-600">
                {p.price}
              </span>
            </button>
          );
        })}
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
          disabled={!selectedPartnerId}
        >
          Next: Review
        </button>
      </div>
    </form>
  );
};

export default StepPartner;
