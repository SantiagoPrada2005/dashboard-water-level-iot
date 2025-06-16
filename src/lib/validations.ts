import { z } from 'zod'

// Esquema de validación para water level que coincide con la tabla de la base de datos
export const waterLevelSchema = z.object({
  level: z.number().positive('El nivel del agua debe ser un número positivo'),
  date: z.date().optional() // Opcional porque puede ser generado automáticamente
})

// Esquema para insertar en la base de datos (sin id porque es auto-increment)
export const insertWaterLevelSchema = z.object({
  level: z.number().positive('El nivel del agua debe ser un número positivo'),
  date: z.date().default(() => new Date()) // Fecha por defecto es ahora
})

export type WaterLevelInput = z.infer<typeof waterLevelSchema>
export type InsertWaterLevelInput = z.infer<typeof insertWaterLevelSchema>