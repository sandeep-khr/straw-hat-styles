import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from "@/server/schema";

config({ path: ".env.local" }); // or .env

export const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, {schema: schema, logger: true});

// Test the connection
async function testConnection() {
    try {
      const result = await sql`SELECT 1 + 1 AS sum`;
      console.log("Database connection successful:", result);
    } catch (error) {
      console.error("Database connection failed:", error);
    }
  } 
testConnection();

