import { atom, useAtom } from "jotai";
import { produce } from "immer";
import type { Product } from "@/components/product-card";
import { useCallback } from "react";

export type CartProduct = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export const cartAtom = atom<CartProduct[]>([]);

export function useCart() {
  const [cart, setCart] = useAtom(cartAtom);

  function addProduct(product: Product) {
    const productIndex = cart.findIndex((p) => p.id === product.id);
    if (productIndex === -1) {
      setCart(
        produce((draft) => {
          draft.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
          });
        })
      );
    } else {
      setProductQuantity(product.id, "increase");
    }
  }

  function setProductQuantity(id: number, type: "increase" | "decrease") {
    setCart(
      produce((draft) => {
        const productIndex = draft.findIndex((p) => p.id === id);
        if (productIndex === -1) {
          throw new Error("Product index not found");
        }

        const product = draft[productIndex];
        switch (type) {
          case "increase": {
            product.quantity += 1;

            break;
          }
          case "decrease": {
            if (product.quantity === 1) {
              draft.splice(productIndex, 1);
            } else {
              product.quantity -= 1;
            }

            break;
          }
        }
      })
    );
  }

  return {
    cart,
    addProduct: useCallback(addProduct, [cart, setCart]),
    setProductQuantity: useCallback(setProductQuantity, [setCart]),
  };
}
