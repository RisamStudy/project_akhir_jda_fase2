// HAPUS "use client"; dari paling atas file ini

import { prisma } from "../../../lib/prisma";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import { DeleteButton } from "../../components/deletebutton";

export default async function PropertyList() {
  const data = await prisma.property.findMany({ include: { owner: true } });
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "Admin") {
    return redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Manajemen Daftar Kontrakan
          </h1>
          <Link
            href="/dashboard/property/create"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition"
          >
            + Tambah Baru
          </Link>
        </div>

        <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <li
              key={item.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h2>
                  <p className="text-blue-600 font-bold mt-1">
                    {" "}
                    Harga : Rp{Number(item.price).toLocaleString()}
                  </p>
                  <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                    {" "}
                    Description : {item.description}
                  </p>
                  <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                    {" "}
                    ID Property : {item.id}
                  </p>
                </div>

                <div className="mt-5 flex gap-2">
                  <Link
                    href={`/dashboard/property/${item.id}/edit`}
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-md transition"
                  >
                    Edit
                  </Link>
                  <DeleteButton propertyId={item.id} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
