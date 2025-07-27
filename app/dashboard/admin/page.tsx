// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";
// import { redirect } from "next/navigation";

// export default async function PropertyDashboardPage() {
//   const session = await getServerSession(authOptions);

//   if (session?.user.role !== "Admin") {
//     return redirect("/dashboard"); // bukan admin, redirect
//   }

//   return (
//     <div>
//       <h1>Dashboard Admin: Data Kontrakan</h1>
//     </div>
//   );
// }

// import { getServerSession } from "next-auth";
// import { authOptions } from "../../api/auth/[...nextauth]/route";
// import Navbar from "../../components/Navbar";
// import { PrismaClient } from "../../generated/prisma";
// import StatusForm from "../../components/StatusForm";

// const prisma = new PrismaClient();

// export default async function Dashboard() {
//   const session = await getServerSession(authOptions);
//   if (!session) return <p>Unauthorized</p>;

//   const bookings = await prisma.booking.findMany({
//     where: {
//       user: {
//         email: session.user.email!,
//       },
//     },
//     include: {
//       property: true,
//     },
//   });

//   return (
//     <div>
//       <Navbar />
//       <h1>Dashboard admin</h1>
//       <p>
//         Halo, {session.user?.name} ({session.user?.email})
//       </p>
//       <h1 className="text-2xl font-bold mb-4">Daftar Pemesanan</h1>
//       <table className="min-w-full bg-white border">
//         <thead>
//           <tr>
//             <th className="border p-2">Properti</th>
//             <th className="border p-2">Status</th>
//             <th className="border p-2">Aksi</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((booking) => (
//             <tr key={booking.id}>
//               <td className="border p-2">{booking.property.name}</td>
//               <td className="border p-2 capitalize">{booking.status}</td>
//               <td className="border p-2">
//                 <StatusForm
//                   bookingId={booking.id}
//                   currentStatus={booking.status}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// Baru
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Navbar from "../../components/Navbar";
import { PrismaClient } from "../../generated/prisma";
import StatusForm from "../../components/StatusForm";

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
    <div>
      <Navbar />
      <h1>Dashboard Admin: Data Kontrakan</h1>
      <p>
        Halo, {session.user?.name} ({session.user?.email})
      </p>
      <h1 className="text-2xl font-bold mb-4">Daftar Pemesanan</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border p-2">Id Booking</th>
            <th className="border p-2">user Id</th>
            <th className="border p-2">Properti</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="border p-2 capitalize">{booking.id}</td>
              <td className="border p-2 capitalize">{booking.userId}</td>
              <td className="border p-2 capitalize">{booking.propertyId}</td>
              <td className="border p-2 capitalize">{booking.status}</td>
              <td className="border p-2">
                <StatusForm
                  bookingId={booking.id}
                  currentStatus={booking.status}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
