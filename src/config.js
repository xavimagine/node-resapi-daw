import { config } from "dotenv";

config();
// procces es un elemento global de node y env almacena todas las variables del ordenador
// si no existe el puerto pone por defecto el puerto 3000
export const PORT = process.env.PROT || 3000;
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "mypassword";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_DATABASE = process.env.DB_DATABASE || "microsoft";
export const DB_PORT = process.env.DB_PORT || 3306;
