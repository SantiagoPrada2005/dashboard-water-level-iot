import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

// Crear el cliente de libSQL
const client = createClient({
  url: process.env.DB_FILE_NAME!,
});

// Crear la instancia de Drizzle ORM
export const db = drizzle(client);

// Exportar el cliente para uso directo si es necesario
export { client };