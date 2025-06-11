import { TFilter } from "@/hooks/useFilter";
import { TProduct } from "@/types";

export async function fetchProducts(body?: TFilter): Promise<TProduct[]> {
  try {
    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(body ?? {}),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
