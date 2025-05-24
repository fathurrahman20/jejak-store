import React from "react";
import { redirect } from "next/navigation";
import { getBrandById } from "../../lib/data";
import { Tedit } from "@/types";
import FormBrand from "../../_components/form-brand";

export default async function EditPage({ params }: Tedit) {
  const id = (await params).id;
  const brand = await getBrandById(id);

  if (!brand) {
    return redirect("/dashboard/brands");
  }

  return <FormBrand type="EDIT" data={brand} />;
}
