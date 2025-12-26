import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING BUTTON */}
      <div className="fixed bottom-6 right-1 z-50">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center w-14 h-14 rounded-full
                     bg-blue-600 text-white shadow-xl
                     hover:bg-blue-700 hover:scale-105
                     transition-all duration-300"
        >
          <MessageCircle size={26} />
        </button>
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] bg-white
                        rounded-2xl shadow-2xl overflow-hidden">
          
          {/* HEADER */}
          <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <div>
              <p className="font-semibold text-sm">Book My Parcel Bot</p>
              <p className="text-xs opacity-80">Online • Typically replies instantly</p>
            </div>

            <button onClick={() => setOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* BODY */}
          <div className="p-4 space-y-4 h-[320px] overflow-y-auto bg-gray-50">
            {/* BOT MESSAGE */}
            <div className="bg-white p-3 rounded-xl shadow text-sm">
              👋 Hi! I’m your Book My Parcel assistant.
              <br />
              How can I help you today?
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs">
                Track Order
              </button>
              <button className="border border-blue-600 text-blue-600 px-3 py-1.5 rounded-full text-xs">
                Contact Support
              </button>
            </div>

            {/* SUPPORT INFO */}
            <div className="bg-white p-3 rounded-xl shadow text-xs text-gray-600">
              📞 Call: +91 1800 123 4567 <br />
              ✉ Email: support@bookmyparcel.com <br />
              ⏱ Avg response time: 2 minutes
            </div>
          </div>

          {/* INPUT */}
          <div className="border-t p-3 flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 text-sm px-3 py-2 border rounded-lg focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 rounded-lg text-sm">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
