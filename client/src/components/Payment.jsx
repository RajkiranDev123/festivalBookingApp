
import React, { useState } from "react";
import {
  Download,
  Smartphone,
  IndianRupee,
  QrCode,
  Copy,
  Check,
} from "lucide-react";

const Payment = () => {
  const [amount, setAmount] = useState("");
  const [copied, setCopied] = useState(false);

  // Your UPI ID
  const upiId = "updram1-1@okaxis";

  // Put your QR image inside public/payment/qr.png
  const qrImage = "/payment/qr.jpeg";

  // UPI Deep Link
  const handleUpiPayment = () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const upiUrl = `upi://pay?pa=${upiId}&pn=Ramesh%20Adhikari&am=${amount}&cu=INR`;

    window.location.href = upiUrl;
  };

  // Download QR
  const handleDownloadQR = () => {
    const link = document.createElement("a");

    link.href = qrImage;
    link.download = "puja-payment-qr.png";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Copy UPI ID
  const handleCopyUPI = async () => {
    try {
      await navigator.clipboard.writeText(upiId);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy UPI ID", error);
    }
  };

  return (
    <section className="mx-auto max-w-2xl px-4 py-10">

      {/* ================= HEADER ================= */}
      <div className="mb-8 text-center">



        <h2 className="text-3xl font-bold text-gray-900/80">
          Make a Payment
        </h2>

        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-amber-400" />

 

      </div>


      <div className="space-y-6">


        {/* ================================================= */}
        {/* OPTION 1 - QR CODE */}
        {/* ================================================= */}

        <div className="overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

          {/* Header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-amber-50 to-orange-50 p-5">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 font-bold text-white shadow-sm">
              1
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Download QR & Pay
              </h3>

              <p className="text-sm text-gray-500">
                Scan the QR using any UPI app
              </p>
            </div>

          </div>


          {/* Content */}
          <div className="flex flex-col items-center p-6">

            {/* QR */}
            <div className="rounded-2xl border-4 border-white bg-white p-2 shadow-lg ring-1 ring-amber-100">

              <img
                src={qrImage}
                alt="Payment QR Code"
                className="h-52 w-52 object-contain"
              />

            </div>


            <p className="mt-4 text-center text-sm font-medium text-gray-600">
              Google Pay • PhonePe • Paytm • BHIM
            </p>


            {/* Download */}
            <button
              onClick={handleDownloadQR}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]"
            >
              <Download size={18} />

              Download QR
            </button>

          </div>

        </div>



        {/* ================================================= */}
        {/* OPTION 2 - UPI DEEP LINK */}
        {/* ================================================= */}

        <div className="overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

          {/* Header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 p-5">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 font-bold text-white shadow-sm">
              2
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Pay Directly via UPI
              </h3>

              <p className="text-sm text-gray-500">
                Enter amount and open your UPI app
              </p>
            </div>

          </div>


          {/* Content */}
          <div className="p-6">

            {/* Amount Label */}
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Enter Amount
            </label>


            {/* Input */}
            <div className="relative">

              <IndianRupee
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="number"
                min="1"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-lg font-semibold outline-none transition focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-100"
              />

            </div>


            {/* Pay Button */}
            <button
              onClick={handleUpiPayment}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3.5 font-bold text-white shadow-md transition hover:from-amber-600 hover:to-orange-600 hover:shadow-lg active:scale-[0.98]"
            >

              <Smartphone size={19} />

              Pay ₹{amount || "0"} via UPI

            </button>


            <p className="mt-3 text-center text-xs text-gray-400">
              Your UPI app will open with the amount filled in
            </p>

          </div>

        </div>



        {/* ================================================= */}
        {/* OPTION 3 - UPI ID */}
        {/* ================================================= */}

        <div className="overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

          {/* Header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 p-5">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white shadow-sm">
              3
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Pay Using UPI ID
              </h3>

              <p className="text-sm text-gray-500">
                Manually enter the UPI ID in your app
              </p>
            </div>

          </div>


          {/* Content */}
          <div className="p-6 text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <QrCode size={28} />
            </div>


            <p className="mt-4 text-sm text-gray-500">
              Send your payment to
            </p>


            {/* UPI ID */}
            <div className="mt-2 flex items-center justify-between gap-3 rounded-xl border border-dashed border-amber-200 bg-amber-50 px-4 py-3">

              <p className="break-all text-left font-bold text-gray-900">
                {upiId}
              </p>


              {/* Copy Button */}
              <button
                onClick={handleCopyUPI}
                className="shrink-0 rounded-lg p-2 text-gray-600 transition hover:bg-white hover:text-amber-600"
                title="Copy UPI ID"
              >

                {copied ? (
                  <Check size={19} className="text-green-600" />
                ) : (
                  <Copy size={19} />
                )}

              </button>

            </div>


            {copied && (
              <p className="mt-2 text-xs font-medium text-green-600">
                UPI ID copied!
              </p>
            )}


            <p className="mt-3 text-xs text-gray-400">
              Open your UPI app → Pay to UPI ID → Enter the amount
            </p>

          </div>

        </div>


      </div>

    </section>
  );
};

export default Payment;
