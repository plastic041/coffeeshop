import { db } from "./db";
import { productsTable } from "./schema";

async function seed() {
  await db.delete(productsTable);

  await db.insert(productsTable).values({
    name: "아메리카노(핫)",
    price: 3000,
    imageSrc: "https://placehold.co/500/png?text=Hot Americano",
  });

  await db.insert(productsTable).values({
    name: "아메리카노(아이스)",
    price: 3000,
    imageSrc: "https://placehold.co/500/png?text=Iced Americano",
  });

  await db.insert(productsTable).values({
    name: "카페라떼(핫)",
    price: 4000,
  });

  await db.insert(productsTable).values({
    name: "카페라떼(아이스)",
    price: 4000,
  });
}

seed();
