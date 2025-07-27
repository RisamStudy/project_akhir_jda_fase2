import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="px-6 py-20 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Selamat Datang di{" "}
            <span className="text-blue-600">KontrakanApp</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Temukan kontrakan impian Anda dengan mudah, cepat, dan terpercaya.
            Kelola properti Anda secara efisien hanya di satu aplikasi.
          </p>
        </div>

        <div className="flex-1">
          <img
            src="/images/landing-kontrakan.png"
            alt="Ilustrasi kontrakan"
            className="w-full max-w-md mx-auto drop-shadow-lg"
          />
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Fitur Unggulan</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg text-blue-600">
                Pencarian Mudah
              </h3>
              <p className="text-gray-600 mt-2">
                Cari kontrakan berdasarkan lokasi, harga, dan fasilitas.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg text-blue-600">
                Manajemen Properti
              </h3>
              <p className="text-gray-600 mt-2">
                Kelola daftar kontrakan, penyewa, dan status pembayaran.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
              <h3 className="font-semibold text-lg text-blue-600">
                Notifikasi Kontrak
              </h3>
              <p className="text-gray-600 mt-2">
                Dapatkan pengingat otomatis saat kontrak akan habis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
