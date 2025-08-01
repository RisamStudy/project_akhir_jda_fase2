import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: "Admin" | "User";
      image?: string;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: "Admin" | "User";
    password?: string;
    image?: string;
  }
}
