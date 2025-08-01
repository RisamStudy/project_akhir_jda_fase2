import { type Metadata } from "next";
import EditPropertyForm from "./EditPropertyForm";
import Navbar from "../../../../components/Navbar";

export default async function EditPropertyPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <Navbar />
      <EditPropertyForm id={params.id} />
    </div>
  );
}
