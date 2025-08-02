"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
}

export default function EditPropertyForm({ id }: Props) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  });

  const router = useRouter();

  useEffect(() => {
    fetch(`/api/property/${id}`)
      .then((res) => res.json())
      .then((data) => setForm({ ...data, price: data.price.toString() }));
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`/api/property/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, price: parseInt(form.price) }),
    });
    router.push("/dashboard/property");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Manajemen Properti Kontrakan
      </h1>
      <p className="text-gray-600 mb-6">
        Ini adalah halaman admin untuk melihat, menambah, mengedit, dan
        menghapus properti.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <h2 className="text-xl font-semibold text-blue-700">Edit Kontrakan</h2>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Judul</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Nama Kontrakan"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Deskripsi
          </label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Deskripsi atau keterangan tambahan"
            className="w-full px-4 py-2 h-24 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            URL Gambar
          </label>
          <input
            type="text"
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            placeholder="https://example.com/image.jpg"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Harga</label>
          <input
            type="number"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            placeholder="Harga per bulan"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Update Properti
        </button>
      </form>
    </div>
  );
}
