"use client";

import { deletePropertyById } from "../actions/deleteProperty";
import { useTransition } from "react";

export function DeleteButton({ propertyId }: { propertyId: number }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    const confirmed = confirm("Yakin ingin menghapus kontrakan ini?");
    if (!confirmed) return;

    startTransition(() => {
      deletePropertyById(Number(propertyId));
    });
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="ml-2 bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-md transition"
    >
      {isPending ? "Menghapus..." : "Hapus"}
    </button>
  );
}
