"use client"

import { useState, useEffect, useCallback } from 'react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

interface WaterLevelData {
  id: number
  date: number | string
  level: number
}

interface WaterLevelResponse {
  waterLevelData: WaterLevelData[]
}

interface AddWaterLevelData {
  level: number
  date?: Date
}

interface AddWaterLevelResponse {
  message: string
  data: WaterLevelData
}

interface UseWaterLevelReturn {
  data: WaterLevelData[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
  addWaterLevel: (data: AddWaterLevelData) => Promise<WaterLevelData | null>
  isAdding: boolean
}

export function useWaterLevel(autoRefresh = false, refreshInterval = 30000): UseWaterLevelReturn {
  const [data, setData] = useState<WaterLevelData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/water-level')
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }
      
      const result: WaterLevelResponse = await response.json()
      setData(result.waterLevelData || [])
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido al obtener los datos'
      setError(errorMessage)
      console.error('Error fetching water level data:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const addWaterLevel = useCallback(async (newData: AddWaterLevelData): Promise<WaterLevelData | null> => {
    try {
      setIsAdding(true)
      setError(null)
      
      const response = await fetch('/api/water-level', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      })
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Error ${response.status}: ${response.statusText}`)
      }
      
      const result: AddWaterLevelResponse = await response.json()
      
      // Actualizar los datos locales agregando el nuevo registro
      setData(prevData => [...prevData, result.data])
      
      return result.data
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido al agregar los datos'
      setError(errorMessage)
      console.error('Error adding water level data:', err)
      return null
    } finally {
      setIsAdding(false)
    }
  }, [])

  const refetch = useCallback(async () => {
    await fetchData()
  }, [fetchData])

  // Efecto para cargar datos iniciales
  useEffect(() => {
    fetchData()
  }, [fetchData])

  // Efecto para auto-refresh
  useEffect(() => {
    if (!autoRefresh) return

    const interval = setInterval(() => {
      fetchData()
    }, refreshInterval)

    return () => clearInterval(interval)
  }, [autoRefresh, refreshInterval, fetchData])

  return {
    data,
    loading,
    error,
    refetch,
    addWaterLevel,
    isAdding,
  }
}

// Hook específico para obtener estadísticas calculadas
export function useWaterLevelStats(data: WaterLevelData[]) {
  return {
    currentLevel: data.length > 0 ? data[data.length - 1]?.level || 0 : 0,
    previousLevel: data.length > 1 ? data[data.length - 2]?.level || 0 : 0,
    averageLevel: data.length > 0 ? data.reduce((sum, item) => sum + item.level, 0) / data.length : 0,
    maxLevel: data.length > 0 ? Math.max(...data.map(item => item.level)) : 0,
    minLevel: data.length > 0 ? Math.min(...data.map(item => item.level)) : 0,
    totalReadings: data.length,
    get levelChange() {
      return this.currentLevel - this.previousLevel
    },
    get isIncreasing() {
      return this.levelChange > 0
    },
    get isDecreasing() {
      return this.levelChange < 0
    },
    get isStable() {
      return this.levelChange === 0
    }
  }
}

// Hook para formatear datos para gráficos
export function useChartData(data: WaterLevelData[]) {
  return data.map(item => {
    // Manejar tanto timestamps Unix (números) como strings ISO
    let dateObj: Date
    let timestamp: number
    
    if (typeof item.date === 'string') {
      // Si es string ISO, convertir directamente
      dateObj = new Date(item.date)
      timestamp = dateObj.getTime() / 1000 // Convertir a timestamp Unix
    } else {
      // Si es timestamp Unix (segundos), convertir a Date
      dateObj = new Date(item.date * 1000)
      timestamp = item.date
    }
    
    return {
      id: item.id,
      // Formato para mostrar en gráficos: "dd/MM HH:mm"
      date: format(dateObj, 'dd/MM HH:mm', { locale: es }),
      // Formato alternativo para tooltips: "dd/MM/yyyy HH:mm"
      fullDate: format(dateObj, 'dd/MM/yyyy HH:mm', { locale: es }),
      level: item.level,
      timestamp: timestamp,
      dateObject: dateObj
    }
  }).sort((a, b) => a.timestamp - b.timestamp)
}