import React, { useState } from "react";
import { X } from "lucide-react";

const WhatsAppIcon = ({ size = 30 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ChatWidgets = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      {/* WhatsApp float */}
      <a
        href="https://wa.me/15612303800"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-5 z-40 w-14 h-14 rounded-full bg-[#25d366] shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon size={30} />
      </a>

      {/* Chat widget */}
      <div className="fixed bottom-5 right-5 z-40">
        {chatOpen ? (
          <div className="w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-[#4b3df5] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHw0fHxjdXN0b21lciUyMGZlZWRiYWNrfGVufDB8fHx8MTc4Nzc0ODMwN3ww&ixlib=rb-4.1.0&q=85"
                  alt="Agent"
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-white/50"
                />
                <div className="text-white text-[13px] leading-tight">
                  <p className="font-semibold">Hi there, how can</p>
                  <p>we help you today?</p>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-white/80 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <div className="p-4 space-y-3">
              <div className="bg-gray-100 rounded-lg rounded-tl-none p-3 text-[13px] text-gray-700">
                Welcome to Masala Cruise! Ask us anything about our all-inclusive cruise packages.
              </div>
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full h-10 rounded-lg border border-gray-200 px-3 text-[14px] focus:outline-none focus:border-[#4b3df5]"
              />
            </div>
          </div>
        ) : (
          <button
            onClick={() => setChatOpen(true)}
            className="flex items-center gap-3 bg-white rounded-full shadow-xl border border-gray-100 pl-2 pr-4 py-2 hover:shadow-2xl transition-all"
          >
            <span className="relative">
              <img
                src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHw0fHxjdXN0b21lciUyMGZlZWRiYWNrfGVufDB8fHx8MTc4Nzc0ODMwN3ww&ixlib=rb-4.1.0&q=85"
                alt="Agent"
                className="w-9 h-9 rounded-full object-cover"
              />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">1</span>
            </span>
            <span className="text-[13px] text-gray-700 leading-tight text-left">
              Hi there, how can<br />we help you today?
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default ChatWidgets;
