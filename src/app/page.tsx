import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { Droplets, Gauge, Shield, Smartphone, Wifi, Zap, BarChart3, Bell, Settings, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:to-blue-900">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">AquaMonitor</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Características</a>
            <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cómo Funciona</a>
            <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Precios</a>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">Comenzar</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700">
            <Zap className="w-3 h-3 mr-1" />
            Tecnología IoT Avanzada
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Monitoreo Inteligente del
            <span className="text-blue-600 dark:text-blue-400 block">Nivel del Agua</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Controla y supervisa el nivel del agua en tiempo real con nuestros dispositivos IoT de última generación. 
            Recibe alertas instantáneas y toma decisiones informadas para optimizar el uso del agua.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              <Smartphone className="w-5 h-5 mr-2" />
              Probar Demo
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20">
              Ver Video
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Características Principales
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tecnología de vanguardia para el monitoreo preciso y confiable del agua
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-700 dark:border-gray-600">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Gauge className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="dark:text-white">Medición Precisa</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Sensores ultrasónicos de alta precisión que proporcionan mediciones exactas del nivel del agua
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-700 dark:border-gray-600">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <Wifi className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="dark:text-white">Conectividad IoT</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Conexión inalámbrica confiable que transmite datos en tiempo real a la nube
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-700 dark:border-gray-600">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="dark:text-white">Alertas Inteligentes</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Notificaciones automáticas cuando los niveles alcanzan umbrales críticos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-700 dark:border-gray-600">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="dark:text-white">Análisis Avanzado</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Dashboard con gráficos y estadísticas detalladas para análisis de tendencias
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-700 dark:border-gray-600">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="dark:text-white">Seguridad Total</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Encriptación de extremo a extremo y protocolos de seguridad avanzados
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow dark:bg-gray-700 dark:border-gray-600">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <CardTitle className="dark:text-white">Fácil Configuración</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Instalación plug-and-play con configuración automática y calibración inteligente
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Cómo Funciona
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Proceso simple y automatizado para el monitoreo continuo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Instalación del Sensor</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Coloca el sensor ultrasónico en el tanque o depósito de agua. 
                La instalación es rápida y no requiere herramientas especiales.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Conexión a la Red</h3>
              <p className="text-gray-600 dark:text-gray-300">
                El dispositivo se conecta automáticamente a tu red WiFi y 
                comienza a transmitir datos a la plataforma en la nube.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Monitoreo en Tiempo Real</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Accede a los datos desde cualquier dispositivo, configura alertas 
                y recibe notificaciones instantáneas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100 dark:text-blue-200">Precisión</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100 dark:text-blue-200">Monitoreo</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100 dark:text-blue-200">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5 min</div>
              <div className="text-blue-100 dark:text-blue-200">Instalación</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            ¿Listo para Optimizar tu Gestión del Agua?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a miles de usuarios que ya confían en AquaMonitor para el control inteligente del agua
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
              <Users className="w-5 h-5 mr-2" />
              Comenzar Prueba Gratuita
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20">
              Contactar Ventas
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">AquaMonitor</span>
              </div>
              <p className="text-gray-400 dark:text-gray-300">
                Soluciones inteligentes para el monitoreo del agua con tecnología IoT avanzada.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Producto</h3>
              <ul className="space-y-2 text-gray-400 dark:text-gray-300">
                <li><a href="#" className="hover:text-white dark:hover:text-blue-400 transition-colors">Características</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-blue-400 transition-colors">Precios</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-blue-400 transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Soporte</h3>
              <ul className="space-y-2 text-gray-400 dark:text-gray-300">
                <li><a href="#" className="hover:text-white dark:hover:text-blue-400 transition-colors">Documentación</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-blue-400 transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-blue-400 transition-colors">Estado del Sistema</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400 dark:text-gray-300">
                <li><a href="#" className="hover:text-white dark:hover:text-blue-400 transition-colors">Acerca de</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-blue-400 transition-colors">Carreras</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800 dark:bg-gray-700" />
          <div className="text-center text-gray-400 dark:text-gray-300">
            <p>&copy; 2025 AquaMonitor. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}