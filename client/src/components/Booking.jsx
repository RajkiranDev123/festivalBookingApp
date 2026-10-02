import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  CheckCircle2,
  Clock,
  IndianRupee,
  Loader2,
  Phone,
  CalendarDays,
} from "lucide-react";

const Booking = () => {
  const location = useLocation();

  // Puja received from PujaCard
  const puja = location.state?.puja;

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();

    setError("");

    // Phone validation
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number for booking.");
      return;
    }

    try {
      setLoading(true);

      // API request
      // const response = await fetch(
      //   `${import.meta.env.VITE_API_URL}/booking`,
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       pujaName: puja.name,
      //       amount: puja.price,
      //       phone,
      //       paid: false,
      //     }),
      //   }
      // );

      // const data = await response.json();

      // if (!response.ok) {
      //   throw new Error(data.message || "Booking failed");
      // }

      // Temporary success
      setSuccess(true);

      // Open WhatsApp after 3 seconds
      setTimeout(() => {
        const whatsappNumber = "919933437203";

        const message = `Namaste 🙏

I want to book a Puja.

Puja: ${puja.name}

Amount: ₹${puja.price}

Phone: ${phone}

Please confirm my booking.`;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          message
        )}`;

        window.location.href = whatsappUrl;
      }, 3000);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // If user directly opens /booking
  if (!puja) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-orange-50 px-4">
        <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
          <h1 className="text-xl font-bold text-gray-800">
            No Puja Selected
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Please select a puja before booking.
          </p>

          <Link
            to="/"
            className="mt-5 block rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Success screen
  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
          {/* Success Icon */}
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>

          <h1 className="text-2xl font-bold text-gray-800">
            Booking Request Sent!
          </h1>

          <p className="mt-2 text-gray-500">
            Your booking request for{" "}
            <span className="font-semibold text-gray-700">
              {puja.name}
            </span>{" "}
            was received successfully.
          </p>

          {/* WhatsApp Status */}
          <div className="mt-6 rounded-2xl bg-green-50 p-4">
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-green-700">
              <Loader2 className="h-4 w-4 animate-spin" />
              Opening WhatsApp...
            </div>

            <p className="mt-2 text-xs text-green-600">
              Please wait a few seconds
            </p>
          </div>

          {/* Back to Home */}
          <Link
            to="/"
            className="mt-4 block w-full rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md active:scale-[0.98]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50 px-4 py-10">
      <div className="mx-auto max-w-md">

        {/* Heading */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800/80">
            Book Now!
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Enter your phone number to continue
          </p>
        </div>

        {/* Puja Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

          {/* Image */}
          <div className="relative h-52">
            <img
              src={puja.img}
              alt={puja.name}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-2xl font-bold text-white">
                {puja.name}
              </h2>
            </div>
          </div>

          {/* Details */}
          <div className="p-6">

            {/* Amount + Duration */}
            <div className="mb-6 grid grid-cols-2 gap-3">

              {/* Amount */}
              <div className="rounded-2xl bg-orange-50 p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <IndianRupee className="h-4 w-4 text-amber-600 animate-pulse" />
                  Amount
                </div>

                <p className="mt-1 text-xl font-bold text-amber-700">
                  ₹{puja.price}
                </p>
              </div>

              {/* Duration */}
              <div className="rounded-2xl bg-gray-50 p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4 text-gray-600 animate-spin" />
                  Duration
                </div>

                <p className="mt-1 text-xl font-bold text-gray-700">
                  {puja.duration}
                </p>
              </div>

            </div>

            {/* Booking Form */}
            <form onSubmit={handleBooking}>

              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Phone Number
              </label>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(
                      e.target.value.replace(/\D/g, "").slice(0, 10)
                    );
                    setError("");
                  }}
                  placeholder="Enter 10-digit phone number"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="mt-2 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-600">
                  {error}
                </p>
              )}

              {/* Book Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Booking...
                  </>
                ) : (
                  <>
                    <CalendarDays className="h-5 w-5" />
                    Book Puja
                  </>
                )}
              </button>

            </form>

            <p className="mt-4 text-center text-xs text-gray-400">
              After successful booking, you will be redirected to WhatsApp
              for confirmation.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;