module.exports = {

"[project]/.next-internal/server/app/dashboard/admin/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/dashboard/admin/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
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
}}),
"[project]/app/dashboard/admin/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/dashboard/admin/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__dfcd5480._.js.map