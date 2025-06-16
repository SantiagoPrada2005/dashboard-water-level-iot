//import { sqliteTable, integer, text, real } from 'drizzle-orm/sqlite-core';

// Esquema básico vacío - puedes agregar tus tablas aquí
// Ejemplo de tabla comentada:
/*
export const exampleTable = sqliteTable('example_table', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  value: real('value'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
});
*/

// Exportar tipos de TypeScript para las tablas
// export type ExampleTable = typeof exampleTable.$inferSelect;
// export type NewExampleTable = typeof exampleTable.$inferInsert;