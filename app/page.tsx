import { Cart } from "@/components/cart";
import { ProductCard } from "@/components/product-card";
import { db } from "@/lib/db";
import { productsTable } from "@/lib/schema";

export default async function Home() {
  const products = await db.select().from(productsTable);

  return (
    <div className="p-4 flex flex-col h-dvh">
      <div className="grid gap-4 grid-cols-2 grow overflow-y-scroll">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <hr className="my-2" />
      <div className="shrink-0 h-1/4 min-h-0 overflow-y-scroll">
        <Cart />
      </div>
    </div>
  );
}
