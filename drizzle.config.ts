import { type Config } from "drizzle-kit";

export default {
  out: "./migrations",
  schema: "./lib/schema.ts",
  breakpoints: true,
  dialect: "sqlite",
  dbCredentials: {
    url: "file:local.db",
  },
} satisfies Config;
