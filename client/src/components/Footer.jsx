import React from "react";
import { Phone, MessageCircle, Mail, Images } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const phoneNumber = "919933437203";
  const email = "ramesh@gmail.com"; // replace with actual email

  return (
    <footer className="mt-12 border-t border-gray-200/60 bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 text-center">
     <h2 className="text-3xl font-bold text-gray-900/80">
          Contact Me
        </h2>

        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-amber-400" />

        {/* Contact Buttons */}
        <div className="mt-6 flex justify-evenly">

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${phoneNumber}?text=Hello%20Pandit%20Ramesh,%20I%20would%20like%20to%20know%20about%20puja%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-green-600 hover:shadow-lg active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5 animate-spin" />
            WhatsApp
          </a>

          {/* Call */}
          <a
            href={`tel:+${phoneNumber}`}
            className="flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-gray-600 hover:shadow-lg active:scale-[0.98]"
          >
            <Phone className="h-5 w-5 text-green-500 animate-bounce" />
            Call Now
          </a>

        

        </div>

        {/* Gallery */}
        <Link
          to="/gallery"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl  bg-gray-50 px-4 py-3 text-sm font-semibold text-amber-700 transition-all hover:bg-gray-100 hover:shadow-md active:scale-[0.98]"
        >
          <Images className="h-5 w-5" />
          View Photos
        </Link>

        <div className="my-5 h-px bg-amber-100" />

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Ramesh Adhikari. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;