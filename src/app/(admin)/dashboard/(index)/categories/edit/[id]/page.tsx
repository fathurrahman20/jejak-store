import React from "react";
import { redirect } from "next/navigation";
import FormCategory from "../../_component/form-category";
import { getCategoryById } from "../../lib/data";

export default async function EditPage(
  propsPromise: Promise<{ params: { id: string } }>
) {
  const { params } = await propsPromise;
  const data = await getCategoryById(params.id);

  if (!data) {
    return redirect("/dashboard/categories");
  }

  return <FormCategory type="EDIT" data={data} />;
}
