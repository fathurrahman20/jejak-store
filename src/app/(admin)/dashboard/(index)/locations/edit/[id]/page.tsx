import React from "react";
import { redirect } from "next/navigation";
import FormCategory from "../../_component/form-location";
import { getLocationById } from "../../lib/data";
import { Tedit } from "@/types";

export default async function EditPage({ params }: Tedit) {
  const id = (await params).id;
  const data = await getLocationById(id);

  if (!data) {
    return redirect("/dashboard/locations");
  }

  return <FormCategory type="EDIT" data={data} />;
}
