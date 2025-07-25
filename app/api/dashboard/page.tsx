import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route"
// "./auth/[...nextauth]/route";
// C:\laragon\www\kontrakan-app\app\api\auth\[...nextauth]\route.ts

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Halo, {session?.user?.name} ({session?.user?.email})</p>
    </div>
  );
}
