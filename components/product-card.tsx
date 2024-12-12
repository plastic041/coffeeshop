"use client";

import { useCart } from "@/lib/atoms/cart";
import Image from "next/image";

export type Product = {
  id: number;
  name: string;
  price: number;
  imageSrc: string | null;
};

type ProductCardProps = {
  product: Product;
};
export function ProductCard({ product }: ProductCardProps) {
  const { addProduct } = useCart();

  return (
    <button
      className="text-start items-stretch bg-card text-card-foreground flex flex-col border rounded-lg p-1 active:brightness-90 transition-all duration-150 select-none"
      onClick={() => {
        addProduct(product);
      }}
    >
      <Image
        src={product.imageSrc ?? "https://placehold.co/500/png?text=No Image"}
        alt={product.name}
        aria-hidden
        width={300}
        height={300}
        className="rounded-sm select-none"
      />
      <div className="flex flex-col px-1 py-2 pb-0 gap-y-1">
        <p className="text-lg leading-5 break-words break-keep select-none">
          {product.name}
        </p>
        <span className="text-base">{product.price.toLocaleString("ko")}</span>
      </div>
    </button>
  );
}
