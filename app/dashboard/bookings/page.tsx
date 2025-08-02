import { prisma } from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { redirect } from "next/navigation";

export default async function BookingList() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }

  if (session.user.role == "User" || session.user.role == "Admin") {
    return redirect("/dashboard/admin"); // hanya user biasa yang bisa booking
  }

  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
  });

  const bookings = await prisma.booking.findMany({
    where: { userId: user?.id },
    include: { property: true },
  });

  return (
    <div className="p-4">
      <h1>Daftar Pemesanan Kontrakan</h1>
      <ul>
        {bookings.map((b) => (
          <li key={b.id}>
            {b.property.name} | {b.startDate.toString().slice(0, 10)} -{" "}
            {b.endDate.toString().slice(0, 10)}| Status: {b.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
