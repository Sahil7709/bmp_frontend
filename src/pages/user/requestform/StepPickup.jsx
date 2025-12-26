// StepPickup.jsx
import React from "react";
import TextInput from "../../../core/common/CommonUi";

const StepPickup = ({ data, updateFields, onNext }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.pickupAddress || !data.deliveryAddress) return;
        onNext();
    };

    const sizeOptions = [
        {
            id: "small",
            title: "Small",
            desc: "Documents, letters",
            range: "Up to 1 kg",
        },
        {
            id: "medium",
            title: "Medium",
            desc: "Books, clothes",
            range: "1–5 kg",
        },
        {
            id: "large",
            title: "Large",
            desc: "Electronics, shoes",
            range: "5–10 kg",
        },
        {
            id: "extra_large",
            title: "Extra Large",
            desc: "Furniture parts",
            range: "10–20 kg",
        },
    ];
    const deliveryOptions = [
        {
            id: "standard",
            title: "Standard",
            desc: "More than 3 Days",
            badge: "POPULAR",
        },
        {
            id: "express",
            title: "Express",
            desc: "1–3 Days",
        },
        {
            id: "same_day",
            title: "Same Day",
            desc: "Today",
        },
    ];


    return (
        <form onSubmit={handleSubmit} className="space-y-5 ">
            {/* CARD 1: Pickup details */}
            <div className="bg-white rounded-2xl shadow-lg px-4 py-4 border border-gray-100 shadow-[0_0_40px_0_rgba(15,23,42,0.18)]">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    Pickup details
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                    <TextInput
                        label="Sender Name"
                        name="senderName"
                        value={data.senderName}
                        onChange={(e) => updateFields({ senderName: e.target.value })}
                        placeholder="Enter sender name"
                    />

                    <TextInput
                        label="Pickup Address"
                        name="pickupAddress"
                        value={data.pickupAddress}
                        onChange={(e) =>
                            updateFields({ pickupAddress: e.target.value })
                        }
                        placeholder="Flat / street / area / landmark"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-3">
                    <TextInput
                        label="City / Village"
                        name="pickupCity"
                        value={data.pickupCity}
                        onChange={(e) => updateFields({ pickupCity: e.target.value })}
                    />
                    <TextInput
                        label="State"
                        name="pickupState"
                        value={data.pickupState}
                        onChange={(e) => updateFields({ pickupState: e.target.value })}
                    />
                    <TextInput
                        label="Pincode"
                        name="pickupPincode"
                        type="number"
                        value={data.pickupPincode}
                        onChange={(e) =>
                            updateFields({ pickupPincode: e.target.value })
                        }
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-3">
                    <TextInput
                        label="Country"
                        name="pickupCountry"
                        value={data.pickupCountry}
                        onChange={(e) =>
                            updateFields({ pickupCountry: e.target.value })
                        }
                    />
                    <TextInput
                        label="Phone number"
                        name="pickupPhone"
                        type="tel"
                        value={data.pickupPhone}
                        onChange={(e) =>
                            updateFields({ pickupPhone: e.target.value })
                        }
                    />
                    <TextInput
                        label="Alternate phone"
                        name="pickupAltPhone"
                        type="tel"
                        value={data.pickupAltPhone}
                        onChange={(e) =>
                            updateFields({ pickupAltPhone: e.target.value })
                        }
                    />
                </div>

                <TextInput
                    label="Aadhaar number (optional)"
                    name="pickupAadhaar"
                    type="text"
                    value={data.pickupAadhaar}
                    onChange={(e) =>
                        updateFields({ pickupAadhaar: e.target.value })
                    }
                    className="mt-3"
                />
            </div>

            {/* CARD 2: Package details */}
            <div className="bg-white rounded-2xl px-5 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] border border-gray-100">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">
                    Package Details
                </h3>

                {/* Select Package Size */}
                <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2">
                        Select Package Size
                    </p>
                    <div className="grid md:grid-cols-4 gap-3">
                        {sizeOptions.map((opt) => {
                            const active = data.packageSize === opt.id;
                            return (
                                <button
                                    key={opt.id}
                                    type="button"
                                    onClick={() => updateFields({ packageSize: opt.id })}
                                    className={`w-full rounded-2xl border px-3 py-3 text-left transition
                                            ${active
                                            ? "border-[#294CFF] bg-[#EEF1FF] shadow-sm"
                                            : "border-gray-200 bg-white hover:border-[#294CFF]/60"
                                        }`}
                                >
                                    <p
                                        className={`text-sm font-semibold mb-1 ${active ? "text-[#294CFF]" : "text-gray-900"
                                            }`}
                                    >
                                        {opt.title}
                                    </p>
                                    <p className="text-[11px] text-gray-500">{opt.desc}</p>
                                    <p className="text-[11px] text-gray-400 mt-1">{opt.range}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Delivery Speed */}
                <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2">
                        Delivery Speed
                    </p>
                    <div className="grid md:grid-cols-3 gap-3">
                        {deliveryOptions.map((opt) => {
                            const active = data.deliverySpeed === opt.id;
                            return (
                                <button
                                    key={opt.id}
                                    type="button"
                                    onClick={() => updateFields({ deliverySpeed: opt.id })}
                                    className={`w-full rounded-2xl border px-3 py-3 text-left transition
                                            ${active
                                            ? "border-[#294CFF] bg-[#EEF1FF] shadow-sm"
                                            : "border-gray-200 bg-white hover:border-[#294CFF]/60"
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <p
                                            className={`text-sm font-semibold ${active ? "text-[#294CFF]" : "text-gray-900"
                                                }`}
                                        >
                                            {opt.title}
                                        </p>
                                        {opt.badge && (
                                            <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-[9px] font-semibold text-white">
                                                {opt.badge}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-[11px] text-gray-500">{opt.desc}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>



                {/* Weight + Dimensions headline */}
                <div className="grid md:grid-cols-[1fr,2fr] gap-4 mb-3">
                    {/* Weight */}
                    <div>
                        <p className="text-xs font-medium text-gray-600 mb-1">Weight (kg)</p>
                        <TextInput
                            name="parcelWeight"
                            value={data.parcelWeight}
                            type="number"
                            onChange={(e) => updateFields({ parcelWeight: e.target.value })}
                            placeholder="Enter weight in kg"
                            className="text-sm"
                        />
                    </div>

                    {/* Dimensions */}
                    <div>
                        <p className="text-xs font-medium text-gray-600 mb-1">
                            Dimensions <span className="text-red-500">*</span>
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                            <TextInput
                                name="parcelLength"
                                value={data.parcelLength}
                                type="number"
                                onChange={(e) => updateFields({ parcelLength: e.target.value })}
                                placeholder="Length (cm)"
                            />
                            <TextInput
                                name="parcelWidth"
                                value={data.parcelWidth}
                                type="number"
                                onChange={(e) => updateFields({ parcelWidth: e.target.value })}
                                placeholder="Width (cm)"
                            />
                            <TextInput
                                name="parcelHeight"
                                value={data.parcelHeight}
                                type="number"
                                onChange={(e) => updateFields({ parcelHeight: e.target.value })}
                                placeholder="Height (cm)"
                            />
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-3">
                    <p className="text-xs font-medium text-gray-600 mb-1">
                        Package Description <span className="text-gray-400 text-[11px]">(optional)</span>
                    </p>
                    <TextInput
                        name="parcelContents"
                        value={data.parcelContents}
                        onChange={(e) => updateFields({ parcelContents: e.target.value })}
                        placeholder="Describe your package contents"
                        className="text-sm h-20"
                    />
                </div>

                {/* Value + type */}
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div>
                        <p className="text-xs font-medium text-gray-600 mb-1">
                            Parcel Value (₹)
                        </p>
                        <TextInput
                            name="parcelValue"
                            type="number"
                            value={data.parcelValue}
                            onChange={(e) => updateFields({ parcelValue: e.target.value })}
                            placeholder="Enter parcel value in ₹"
                        />
                    </div>

                    <div>
                        <p className="text-xs font-medium text-gray-600 mb-1">
                            Parcel type
                        </p>
                        <TextInput
                            name="parcelType"
                            value={data.parcelType}
                            onChange={(e) => updateFields({ parcelType: e.target.value })}
                            placeholder="Documents, Electronics, Fragile…"
                        />
                    </div>
                </div>

                {/* Additional note */}
                <div>
                    <p className="text-xs font-medium text-gray-600 mb-1">
                        Additional note
                    </p>
                    <TextInput
                        name="parcelNotes"
                        value={data.parcelNotes}
                        onChange={(e) => updateFields({ parcelNotes: e.target.value })}
                        placeholder="Write note as per your preference"
                        className="text-sm h-16"
                    />
                </div>
            </div>


            {/* CARD 3: Delivery details */}
            <div className="bg-white rounded-2xl shadow-lg px-4 py-4 border border-gray-100 shadow-[0_0_40px_0_rgba(15,23,42,0.18)]">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Delivery details
                </h3>

                <TextInput
                    label="Delivery Address"
                    name="deliveryAddress"
                    value={data.deliveryAddress}
                    onChange={(e) =>
                        updateFields({ deliveryAddress: e.target.value })
                    }
                    placeholder="Receiver full address"
                />

                <div className="grid md:grid-cols-3 gap-4 mt-3">
                    <TextInput
                        label="City"
                        name="deliveryCity"
                        value={data.deliveryCity}
                        onChange={(e) =>
                            updateFields({ deliveryCity: e.target.value })
                        }
                    />
                    <TextInput
                        label="State"
                        name="deliveryState"
                        value={data.deliveryState}
                        onChange={(e) =>
                            updateFields({ deliveryState: e.target.value })
                        }
                    />
                    <TextInput
                        label="Pincode"
                        name="deliveryPincode"
                        type="number"
                        value={data.deliveryPincode}
                        onChange={(e) =>
                            updateFields({ deliveryPincode: e.target.value })
                        }
                    />
                </div>
            </div>

            {/* NEXT BUTTON (one for whole page) */}
            <div className="flex justify-end pt-2">
                <button
                    type="submit"
                    className="bg-blue-600 text-white text-sm px-6 py-2 rounded-full hover:bg-blue-700 transition"
                >
                    Next: Select Partner
                </button>
            </div>
        </form>
    );
};

export default StepPickup;
