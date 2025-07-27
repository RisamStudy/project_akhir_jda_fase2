"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EditPropertyPage({
  params,
}: {
  params: { id: string };
}) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  });
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/property/${params.id}`)
      .then((res) => res.json())
      .then((data) => setForm({ ...data, price: data.price.toString() }));
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch(`/api/property/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ ...form, price: parseInt(form.price) }),
    });
    router.push("/dashboard/property");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Manajemen Properti Kontrakan</h1>
      <p className="mt-2">
        Ini adalah halaman admin untuk melihat, menambah, mengedit, dan
        menghapus properti.
      </p>
      <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto">
        <h1>Edit Kontrakan</h1>
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Deskripsi atau judul"
        />
        <input
          value={form.imageUrl}
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          placeholder="Image URL"
        />
        <input
          value={form.price}
          type="number"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          placeholder="Harga"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
