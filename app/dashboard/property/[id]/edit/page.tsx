import EditPropertyForm from "./EditPropertyForm";

type EditPropertyPageProps = {
  params: {
    id: string;
  };
};

export default async function EditPropertyPage({
  params,
}: EditPropertyPageProps) {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <EditPropertyForm id={params.id} />
    </div>
  );
}
