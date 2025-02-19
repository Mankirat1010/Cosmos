// import dotenv from "dotenv"
// dotenv.config({path: "./src/config/.env"})


import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, ".env") }); // ✅ Loads from src/config/.env


