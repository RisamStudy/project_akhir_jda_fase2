"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../../components/Navbar";

export default function CreateBookingPage() {
  const [propertyId, setPropertyId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [properties, setProperties] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/property")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("/api/bookings", {
      method: "POST",
      body: JSON.stringify({
        propertyId: parseInt(propertyId),
        startDate,
        endDate,
      }),
    });
    router.push("/dashboard/bookings");
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-6"
      >
        <h1 className="text-2xl font-bold text-gray-800">Booking Kontrakan</h1>

        <div className="space-y-2">
          <label htmlFor="property" className="block font-medium text-gray-700">
            Pilih Kontrakan
          </label>
          <select
            id="property"
            value={propertyId}
            onChange={(e) => setPropertyId(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">-- Pilih kontrakan --</option>
            {properties.map((p: any) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="start-date"
            className="block font-medium text-gray-700"
          >
            Tanggal Mulai
          </label>
          <input
            id="start-date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="end-date" className="block font-medium text-gray-700">
            Tanggal Selesai
          </label>
          <input
            id="end-date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
        >
          Pesan Sekarang
        </button>
      </form>
    </>
  );
}
