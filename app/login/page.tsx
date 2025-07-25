"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.ok) {
        console.log("Berhasil masuk");
        alert("Login berhasil!");
        router.push("/dashboard");
    } else {
        let errorMsg = "Login gagal";
        if (res?.error) {
            errorMsg = res.error;
        } else if (res?.status === 401) {
            errorMsg = "Email atau password salah.";
        }
        console.log("gagal masuk");
        alert(errorMsg);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}
