"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { Droplets, TrendingUp, TrendingDown, Activity } from "lucide-react"
import { useWaterLevel, useWaterLevelStats, useChartData } from "@/hooks/useWaterLevel"

const chartConfig = {
  level: {
    label: "Nivel de Agua",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function Dashboard() {
  // Usar el hook personalizado con auto-refresh habilitado
  const { data, loading, error, refetch } = useWaterLevel(true, 30000)
  
  // Usar el hook de estadísticas
  const stats = useWaterLevelStats(data)
  
  // Usar el hook para formatear datos del gráfico
  const chartData = useChartData(data)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-96">
          <CardHeader>
            <CardTitle className="text-destructive">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{error}</p>
            <button 
              onClick={refetch}
              className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
            >
              Reintentar
            </button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground flex items-center justify-center gap-2">
            <Droplets className="h-8 w-8 text-blue-500" />
            Dashboard de Nivel de Agua IoT
          </h1>
          <p className="text-muted-foreground">
            Monitoreo en tiempo real del nivel de agua
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Nivel Actual</CardTitle>
              <Droplets className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.currentLevel.toFixed(2)} cm</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                {stats.isIncreasing ? (
                  <><TrendingUp className="h-3 w-3 text-green-500" /> +{stats.levelChange.toFixed(2)} cm</>
                ) : stats.isDecreasing ? (
                  <><TrendingDown className="h-3 w-3 text-red-500" /> {stats.levelChange.toFixed(2)} cm</>
                ) : (
                  <><Activity className="h-3 w-3 text-gray-500" /> Sin cambios</>
                )}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Promedio</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.averageLevel.toFixed(2)} cm</div>
              <p className="text-xs text-muted-foreground">
                Basado en {stats.totalReadings} mediciones
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Máximo</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.maxLevel.toFixed(2)} cm</div>
              <p className="text-xs text-muted-foreground">
                Nivel más alto registrado
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mínimo</CardTitle>
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.minLevel.toFixed(2)} cm</div>
              <p className="text-xs text-muted-foreground">
                Nivel más bajo registrado
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Line Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Tendencia del Nivel de Agua</CardTitle>
              <CardDescription>
                Evolución del nivel de agua a lo largo del tiempo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    label={{ value: 'Nivel (cm)', angle: -90, position: 'insideLeft' }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="level" 
                    stroke="var(--chart-1)" 
                    strokeWidth={2}
                    dot={{ fill: "var(--chart-1)", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Area Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Área de Nivel de Agua</CardTitle>
              <CardDescription>
                Visualización del área bajo la curva del nivel de agua
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <AreaChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    label={{ value: 'Nivel (cm)', angle: -90, position: 'insideLeft' }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area 
                    type="monotone" 
                    dataKey="level" 
                    stroke="var(--chart-2)" 
                    fill="var(--chart-2)"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Distribución de Niveles</CardTitle>
            <CardDescription>
              Gráfico de barras mostrando las últimas mediciones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[400px]">
              <BarChart data={chartData.slice(-10)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  label={{ value: 'Nivel (cm)', angle: -90, position: 'insideLeft' }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar 
                  dataKey="level" 
                  fill="var(--chart-3)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Data Table */}
        <Card>
          <CardHeader>
            <CardTitle>Datos Recientes</CardTitle>
            <CardDescription>
              Últimas 10 mediciones registradas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">ID</th>
                    <th className="text-left p-2">Fecha y Hora</th>
                    <th className="text-left p-2">Nivel (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {data.slice(-10).reverse().map((item) => (
                    <tr key={item.id} className="border-b hover:bg-muted/50">
                      <td className="p-2">{item.id}</td>
                      <td className="p-2">
                        {new Date(item.date * 1000).toLocaleString('es-ES')}
                      </td>
                      <td className="p-2 font-mono">{item.level.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Dashboard actualizado automáticamente cada 30 segundos</p>
          <p>Última actualización: {new Date().toLocaleString('es-ES')}</p>
        </div>
      </div>
    </div>
  )
}
