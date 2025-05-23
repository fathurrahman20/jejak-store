import React from "react";
import { redirect } from "next/navigation";
import FormCategory from "../../_component/form-category";
import { getCategoryById } from "../../lib/data";

interface EditPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPage({ params }: EditPageProps) {
  const id = (await params).id;
  const data = await getCategoryById(id);

  if (!data) {
    return redirect("/dashboard/categories");
  }

  return <FormCategory type="EDIT" data={data} />;
}
