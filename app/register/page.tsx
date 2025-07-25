"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import bcrypt from "bcrypt"; 

export default function Register() {    
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("../register", {
      method: "POST",
      body: JSON.stringify({ email, name, password }),
    });
    if (res.ok) {
        router.push("/login");
        console.log("berhasil mendaftar");
        alert("Registration Succes");
    }
    
    else {
      const data = await res.json();
      alert(data.error || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
}
