// src/pages/user/requestform/RequestForm.jsx
import React, { useState } from "react";
import StepPickup from "./StepPickup";
import StepPartner from "./StepPartner";
import StepReview from "./StepReview";
import OrderSummary from "./OrderSummary";

// rename steps as you want to show in UI
const steps = [
    "Pickup & Package Details",
    "Select Traveler",
    "Review & Confirm",
];

const RequestForm = () => {
    const [step, setStep] = useState(1);

    // src/pages/user/requestform/RequestForm.jsx
    const [formData, setFormData] = useState({
        // Sender/Pickup fields (StepPickup)
        senderName: "",
        pickupAddress: "",
        pickupCity: "",
        pickupState: "",
        pickupPincode: "",
        pickupCountry: "",
        pickupPhone: "",
        pickupAltPhone: "",
        pickupAadhaar: "",
        pickupDateTime: "",

        //Package fields (StepPackage)
        packageSize: "",      // ← ADD THIS
        parcelWeight: "",
        parcelLength: "",
        parcelWidth: "",
        parcelHeight: "",
        parcelContents: "",
        parcelValue: "",
        parcelNotes: "",

        // Delivery fields (StepPickup)
        deliveryAddress: "",
        deliveryCity: "",
        deliveryState: "",
        deliveryPincode: "",

        // Package fields (you already have these)
        parcelType: "",
        parcelWeight: "",

        // Partner fields (you already have these)
        selectedPartnerId: null,
        selectedPartnerName: "",
        priceQuote: "",
    });


    const updateFields = (fields) =>
        setFormData((prev) => ({ ...prev, ...fields }));

    const next = () => setStep((s) => Math.min(s + 1, steps.length));
    const back = () => setStep((s) => Math.max(s - 1, 1));

    const handleSubmit = async () => {
        console.log("Submitting request:", formData);
    };

    // RequestForm.jsx (only the JSX return part)
    return (
        <div className="min-h-screen  py-8">
            <div className="max-w-6xl mx-auto">

                {/* PAGE TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold text-[#294CFF] mb-4">
                    Send Parcel
                </h1>

                {/* STEPPER */}
                <div className="flex items-center gap-4 mb-6 text-xs md:text-sm">
                    {[1, 2, 3].map((num) => {
                        const labels = [
                            "Pickup & Delivery and package details",
                            "Select Traveler",
                            "Review & Confirm",
                        ];
                        const isActive = step === num;
                        const isDone = step > num;
                        return (
                            <div key={num} className="flex items-center gap-2">
                                <div
                                    className={`w-7 h-7 flex items-center justify-center rounded-full border text-[11px] font-semibold
                                             ${isActive
                                            ? "bg-[#294CFF] text-white border-[#294CFF]"
                                            : isDone
                                                ? "bg-white text-[#294CFF] border-[#294CFF]"
                                                : "bg-white text-gray-400 border-gray-300"
                                        }`}
                                >
                                    {num}
                                </div>
                                <span
                                    className={`hidden md:inline-block ${isActive ? "text-[#294CFF]" : "text-gray-500"
                                        }`}
                                >
                                    {labels[num - 1]}
                                </span>
                                {num !== 3 && (
                                    <div className="hidden md:block w-12 h-[2px] bg-gray-200" />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* MAIN GRID: LEFT FORM + RIGHT SUMMARY */}
                <div className="grid lg:grid-cols-[2fr,1fr] gap-6">
                    {/* LEFT STACKED CARDS */}
                    <div className="space-y-5">
                        {/* Card 1: Pickup Details (step 1 view) */}
                        <div className="bg-white rounded-2xl px-6 py-5 ">
                            <h2 className="text-lg font-semibold text-[#294CFF] mb-4">
                                Pickup Details
                            </h2>
                            {step === 1 && (
                                <StepPickup
                                    data={formData}
                                    updateFields={updateFields}
                                    onNext={next}
                                />
                            )}
                            {step > 1 && (
                                <p className="text-xs text-gray-400">
                                    Edit in step 1 to change pickup details.
                                </p>
                            )}
                        </div>

                        {/* Card 2: Package / next steps (still using your step logic) */}
                        <div className="bg-white rounded-2xl shadow-sm px-6 py-5">
                            <h2 className="text-lg font-semibold text-[#294CFF] mb-4">
                                {step === 1
                                    ? "Package Details"
                                    : step === 2
                                        ? "Select Traveler"
                                        : "Review & Confirm"}
                            </h2>

                            {step === 2 && (
                                <StepPartner
                                    data={formData}
                                    updateFields={updateFields}
                                    onNext={next}
                                    onBack={back}
                                />
                            )}

                            {step === 3 && (
                                <StepReview
                                    data={formData}
                                    onBack={back}
                                    onSubmit={handleSubmit}
                                />
                            )}

                            {/* If still on step 1, you can render package‑size UI here later */}
                            {step === 1 && (
                                <p className="text-xs text-gray-400">
                                    Add your package size, speed and details here.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* RIGHT: ORDER SUMMARY SIDEBAR */}
                    <aside className="bg-white rounded-2xl shadow-sm px-5 py-5 h-fit lg:sticky lg:top-6">


                        {/* RIGHT: ORDER SUMMARY SIDEBAR */}
                        <OrderSummary data={formData} />

                    </aside>
                </div>
            </div>
        </div>
    );

};

export default RequestForm;
