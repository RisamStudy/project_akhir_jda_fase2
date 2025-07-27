import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth({
  pages: { signIn: "/login" },
  callbacks: {
    authorized({ token, req }) {
      const path = req.nextUrl.pathname;

      // Jika menuju ke /dashboard/property  harus admin
      if (path.startsWith("/dashboard/property")) {
        return token?.role === "Admin";
      }

      if (path.startsWith("/dashboard/bookings")) {
        return token?.role === "User" || token?.role === "Admin";
      }

      return !!token; // default: asal sudah login
    },
  },
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
