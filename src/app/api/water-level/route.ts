import { db } from '@/db'
import { waterLevel } from '@/db/schema'
import { waterLevelSchema } from '@/lib/validations'

import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  // Get the water level data from your database
  const waterLevelData = await db.select().from(waterLevel);

  return NextResponse.json({ waterLevelData })
}


export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validar los datos de entrada con Zod
    const validatedData = waterLevelSchema.parse(body)
    
    // Preparar los datos para insertar en la base de datos
    const dataToInsert = {
      level: validatedData.level,
      date: validatedData.date || new Date()
    }
    
    // Guardar en la base de datos
    const result = await db.insert(waterLevel).values(dataToInsert).returning()
    
    return NextResponse.json({ 
      message: 'Data saved successfully', 
      data: result[0] 
    })
  } catch (error) {
    // Si es un error de validación de Zod
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Validation error', details: error.message },
        { status: 400 }
      )
    }
    
    // Otros errores
    return NextResponse.json(
      { error: 'Failed to save water level data', details: error },
      { status: 500 }
    )
  }
}

