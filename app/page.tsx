import Image from "next/image";
import Navbar from "./components/Navbar";
import ilustrasi from "./assets/ilustrasi_kontrakan.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-muted">
      <Navbar />

      <section className="px-6 py-20 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Selamat Datang di <span className="text-primary">KontrakanApp</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Temukan kontrakan impian Anda dengan mudah, cepat, dan terpercaya.
            Kelola properti Anda secara efisien hanya di satu aplikasi.
          </p>
          <div className="mt-6">
            <Button size="lg">Mulai Sekarang</Button>
          </div>
        </div>

        <div className="flex-1">
          <Image
            src={ilustrasi}
            alt="Ilustrasi kontrakan"
            className="w-full max-w-md mx-auto drop-shadow-xl rounded-xl"
            priority
          />
        </div>
      </section>

      <section id="fitur" className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Fitur Unggulan</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Pencarian Mudah",
                desc: "Cari kontrakan berdasarkan lokasi, harga, dan fasilitas.",
              },
              {
                title: "Manajemen Properti",
                desc: "Kelola daftar kontrakan, penyewa, dan status pembayaran.",
              },
              {
                title: "Notifikasi Kontrak",
                desc: "Dapatkan pengingat otomatis saat kontrak akan habis.",
              },
            ].map((fitur, idx) => (
              <Card key={idx} className="text-left">
                <CardHeader>
                  <CardTitle className="text-primary text-lg font-semibold">
                    {fitur.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{fitur.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="kontrakan" className="bg-muted py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Daftar Kontrakan
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {["A", "B", "C"].map((label) => (
              <Card key={label} className="overflow-hidden">
                <Image
                  src={ilustrasi}
                  alt={`Kontrakan ${label}`}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">Kontrakan {label}</h3>
                  <p className="text-muted-foreground">
                    Luas: {30 + label.charCodeAt(0)} m²
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="lokasi" className="bg-background py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            Lokasi Kontrakan
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            Kontrakan kami terletak di lokasi strategis di pusat kota Cirebon,
            dekat dengan fasilitas umum seperti pasar, sekolah, dan transportasi
            umum.
          </p>
          <div className="w-full h-96 rounded-xl overflow-hidden shadow">
            <iframe
              title="Lokasi Kontrakan"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63345.358495768126!2d108.51229555000001!3d-6.7320238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ee296dc10c3e7%3A0x401e8f1fc28c2f0!2sCirebon%2C%20Kota%20Cirebon%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1691229470011!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-200 py-12 mt-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">KontrakanApp</h3>
            <p className="text-gray-400">
              Aplikasi solusi pencarian dan pengelolaan kontrakan secara
              efisien.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Navigasi</h4>
            <ul className="space-y-1">
              <li>
                <a href="#fitur" className="hover:underline">
                  Fitur
                </a>
              </li>
              <li>
                <a href="#kontrakan" className="hover:underline">
                  Daftar Kontrakan
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:underline">
                  Lokasi
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Kontak</h4>
            <p className="text-gray-400">Email: support@kontrakanapp.com</p>
            <p className="text-gray-400">Telepon: +62 812 3456 7890</p>
            <p className="text-gray-400">
              Alamat: Jl. Merdeka No. 123, Cirebon
            </p>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} KontrakanApp. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
