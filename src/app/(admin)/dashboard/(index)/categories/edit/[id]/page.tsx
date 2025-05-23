import React from "react";
import { redirect } from "next/navigation";
import FormCategory from "../../_component/form-category";
import { getCategoryById } from "../../lib/data";

type Tparams = {
  id: string;
};

interface EditPageProp {
  params: Tparams;
}

export default async function EditPage({ params }: EditPageProp) {
  const { id } = params;
  const data = await getCategoryById(id);

  if (!data) {
    return redirect("/dashboard/categories");
  }

  return <FormCategory type="EDIT" data={data} />;
}
