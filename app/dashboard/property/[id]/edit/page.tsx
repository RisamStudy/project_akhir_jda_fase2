import EditPropertyForm from "./EditPropertyForm";
import Navbar from "@/app/components/Navbar";

export default function EditPropertyPage({
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
