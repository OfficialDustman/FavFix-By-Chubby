"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

const BookingConfirmation = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const service = searchParams.get("service");
  const date = searchParams.get("date");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-900">Thank You, {name}!</h1>
        <p className="mt-4 text-gray-700">
          Your booking for <strong>{service}</strong> on <strong>{date}</strong> has been successfully submitted. We’ll contact you shortly!
        </p>
        <div className="mt-6">
          <Link href="/">
            <a className="bg-blue-900 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700">
              Go Back to Home
            </a>
          </Link>
        </div>
        <div className="mt-4">
          <Link href="/services">
            <a className="text-blue-900 underline hover:text-blue-700">
              Book another service
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
