import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Navbar from "../../components/Navbar";
import { PrismaClient } from "../../generated/prisma";
import StatusForm from "../../components/StatusForm";
import { deleteBookingById } from "../../actions/deleteBooking";
import DeleteBookingButton from "../../components/DeleteBookingButton";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const prisma = new PrismaClient();

export default async function PropertyDashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || session?.user.role !== "Admin") {
    return redirect("/dashboard");
  }

  const bookings = await prisma.booking.findMany({
    include: {
      property: true,
    },
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10">
      <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
        <Navbar />

        {/* Search + Actions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Kelola Booking</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search Bar */}
            <div className="w-full md:w-1/2">
              <Input placeholder="Cari pemesanan..." className="w-full" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
              <Link href="/dashboard/admin/add-booking">
                <Button className="bg-green-600 hover:bg-green-700">
                  + Tambah Booking
                </Button>
              </Link>
              <Button variant="default">Mass Edit</Button>
              <Button variant="destructive">Delete All</Button>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Content */}
        <Card>
          <CardHeader>
            <CardTitle>Dashboard Admin: Data Kontrakan</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Halo, {session.user?.name} ({session.user?.email})
            </p>
          </CardHeader>

          <CardContent>
            <h2 className="text-xl font-bold mb-4">Daftar Pemesanan</h2>
            <div className="overflow-x-auto rounded-md border">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 dark:bg-gray-800 text-left">
                  <tr>
                    <th className="px-4 py-2 font-semibold">ID Booking</th>
                    <th className="px-4 py-2 font-semibold">User ID</th>
                    <th className="px-4 py-2 font-semibold">Properti</th>
                    <th className="px-4 py-2 font-semibold">Status</th>
                    <th className="px-4 py-2 font-semibold">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className="border-t hover:bg-muted/50 transition-colors"
                    >
                      <td className="px-4 py-2 capitalize">{booking.id}</td>
                      <td className="px-4 py-2 capitalize">{booking.userId}</td>
                      <td className="px-4 py-2 capitalize">
                        {booking.propertyId}
                      </td>
                      <td className="px-4 py-2 capitalize">{booking.status}</td>
                      <td className="px-4 py-2">
                        <div className="flex gap-2">
                          <StatusForm
                            bookingId={booking.id}
                            currentStatus={booking.status}
                          />
                          <DeleteBookingButton bookingId={booking.id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
