import { TCart } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartState {
  products: TCart[];
  addProduct: (cart: TCart) => void;
  increaseProduct: (id: string) => void;
  decreaseProduct: (id: string) => void;
  removeProduct: (id: string) => void;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      products: [],
      addProduct: (cart) =>
        set({
          products: [
            ...get().products.filter((item) => item.id !== cart.id),
            cart,
          ],
        }),
      increaseProduct: (id) => {
        const newProducts = get().products.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );

        set({
          products: newProducts,
        });
      },
      decreaseProduct: (id) => {
        const newProducts = get().products.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );

        set({
          products: newProducts.filter((item) => item.quantity !== 0),
        });
      },
      removeProduct: (id) =>
        set({
          products: get().products.filter((item) => item.id !== id),
        }),
    }),
    {
      name: "cart-product",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
