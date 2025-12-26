import { MessageCircle } from "lucide-react";

export default function FloatingChat() {
  return (
    <div className="fixed bottom-6 right-1 z-50">
      <a
        href="https://wa.me/919999999999" // replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full
                   bg-blue-600 text-white shadow-lg
                   hover:bg-blue-700 hover:scale-105
                   transition-all duration-300"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
