import React from "react";
import { redirect } from "next/navigation";
import FormCategory from "../../_component/form-category";
import { getCategoryById } from "../../lib/data";
import { Tedit } from "@/types";

export default async function EditPage({ params }: Tedit) {
  const id = (await params).id;
  const data = await getCategoryById(id);

  if (!data) {
    return redirect("/dashboard/categories");
  }

  return <FormCategory type="EDIT" data={data} />;
}
