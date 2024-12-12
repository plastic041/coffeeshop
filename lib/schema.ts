import { relations, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const productsTable = sqliteTable(
  "products",
  {
    id: integer("id").notNull().primaryKey(),
    name: text("name").notNull(),
    price: integer("price").notNull(),
    imageSrc: text("image_src"),
    createdAt: integer("created_at", { mode: "timestamp" })
      .default(sql`(strftime('%s', 'now'))`)
      .notNull(),
  },
  () => []
);

export const ordersTable = sqliteTable(
  "orders",
  {
    id: integer("id").notNull().primaryKey(),
    phonenumber: text("phonenumber").notNull(),
    createdAt: integer("created_at", { mode: "timestamp" })
      .default(sql`(strftime('%s', 'now'))`)
      .notNull(),
  },
  () => []
);

export const orderRelations = relations(ordersTable, ({ many }) => ({
  orderDetails: many(orderDetailsTable),
}));

export const orderDetailsTable = sqliteTable(
  "orderDetails",
  {
    id: integer("id").notNull().primaryKey(),
    productId: integer("product_id"),
    quantity: integer("quantity"),
  },
  () => []
);

export const orderDetailsRelations = relations(
  orderDetailsTable,
  ({ one }) => ({
    orders: one(ordersTable, {
      fields: [orderDetailsTable.productId],
      references: [ordersTable.id],
    }),
  })
);
