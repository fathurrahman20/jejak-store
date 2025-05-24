import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

const supabase = createClient(SUPABASE_URL!, SUPABASE_KEY!);
export const getImageUrl = (
  name: string,
  path: "brands" | "products" = "brands"
) => {
  const { data } = supabase.storage
    .from("store")
    .getPublicUrl(`public/${path}/${name}`);

  return data.publicUrl;
};

export const uploadFile = async (
  file: File,
  path: "brands" | "product" = "brands"
) => {
  const fileType = file.type.split("/")[1];
  const fileName = `${path}-${Date.now()}.${fileType}`;

  await supabase.storage
    .from("store")
    .upload(`public/${path}/${fileName}`, file, {
      cacheControl: "3600",
      upsert: false,
    });

  return fileName;
};
