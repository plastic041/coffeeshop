"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/atoms/cart";
import { MinusIcon, PlusIcon } from "lucide-react";

export function Cart() {
  const { cart, setProductQuantity } = useCart();

  return (
    <ul className="flex flex-col w-full">
      {cart.map((cartProduct) => (
        <li
          key={cartProduct.id}
          className="flex flex-row max-w-full items-center justify-between gap-4"
        >
          <p className="break-words break-keep min-w-0">{cartProduct.name}</p>
          <div className="flex flex-row items-center gap-x-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                setProductQuantity(cartProduct.id, "decrease");
              }}
            >
              <MinusIcon />
            </Button>
            <span className="tabular-nums">{cartProduct.quantity}</span>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                setProductQuantity(cartProduct.id, "increase");
              }}
            >
              <PlusIcon />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
