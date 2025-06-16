import { integer, real, sqliteTable } from "drizzle-orm/sqlite-core";

// Esquema básico vacío - puedes agregar tus tablas aquí
// Ejemplo de tabla comentada:

export const waterLevel = sqliteTable('water_level', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  date: integer('date', { mode: 'timestamp' }).notNull(),
  level: real('level').notNull(),
});


// Exportar tipos de TypeScript para las tablas
export type WaterLevel = typeof waterLevel.$inferSelect;
export type NewWaterLevel = typeof waterLevel.$inferInsert;