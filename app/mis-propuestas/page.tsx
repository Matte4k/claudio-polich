import type { Metadata } from "next";
import Image from "next/image";
import {
  Building,
  Users,
  Lightbulb,
  Heart,
  RouteIcon as Road,
  Home,
  Briefcase,
  GraduationCap,
  Shield,
  Leaf,
  Smartphone,
  Car,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mis Propuestas - Claudio Polich",
  description:
    "Conocé las propuestas de Claudio Polich para transformar la Ciudad de Corrientes en una metrópoli moderna, inclusiva y próspera.",
};

export default function EjesDeGobiernoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-montserrat-black-italic text-4xl md:text-6xl mb-6">
              Mis Propuestas
            </h1>
            <p className="font-geist-medium text-xl md:text-2xl text-red-100 max-w-4xl mx-auto">
              Un plan integral para transformar Corrientes en una ciudad del
              siglo XXI, con oportunidades para todos y un futuro próspero y
              sostenible.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-geist-medium text-lg text-gray-600 leading-relaxed">
            Nuestro plan de gobierno se basa en cuatro ejes fundamentales que
            abordan las necesidades más urgentes de nuestra ciudad y proyectan
            un futuro de crecimiento sostenible, inclusión social y
            modernización integral.
          </p>
        </div>
      </section>

      {/* Eje 1: Desarrollo Urbano */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <Building className="text-white" size={32} />
                </div>
                <h2 className="font-montserrat-black-italic text-4xl md:text-5xl text-gray-900">
                  Desarrollo Urbano
                </h2>
              </div>
              <p className="font-geist-medium text-xl text-gray-600 mb-8">
                Una ciudad moderna requiere infraestructura de calidad,
                planificación urbana inteligente y espacios públicos que mejoren
                la calidad de vida de todos los correntinos.
              </p>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop"
                alt="Desarrollo urbano en Corrientes"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Road className="text-blue-600 mb-4" size={32} />
              <h3 className="font-geist-bold text-xl text-gray-900 mb-3">
                Infraestructura Vial
              </h3>
              <ul className="font-geist-medium text-gray-600 space-y-2">
                <li>• Pavimentación de 200 cuadras anuales</li>
                <li>• Renovación del sistema de desagües</li>
                <li>• Modernización del alumbrado público LED</li>
                <li>• Ciclovías integradas en toda la ciudad</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Home className="text-blue-600 mb-4" size={32} />
              <h3 className="font-geist-bold text-xl text-gray-900 mb-3">
                Vivienda Social
              </h3>
              <ul className="font-geist-medium text-gray-600 space-y-2">
                <li>• Programa de 1000 viviendas sociales</li>
                <li>• Créditos blandos para primera vivienda</li>
                <li>• Regularización dominial</li>
                <li>• Mejoramiento de barrios existentes</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Leaf className="text-blue-600 mb-4" size={32} />
              <h3 className="font-geist-bold text-xl text-gray-900 mb-3">
                Espacios Verdes
              </h3>
              <ul className="font-geist-medium text-gray-600 space-y-2">
                <li>• Creación de 10 nuevos parques</li>
                <li>• Renovación de plazas existentes</li>
                <li>• Arbolado urbano planificado</li>
                <li>• Senderos ecológicos costeros</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Eje 2: Inclusión Social */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-last md:order-first">
              <Image
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=400&fit=crop"
                alt="Inclusión social en Corrientes"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <Users className="text-white" size={32} />
                </div>
                <h2 className="font-montserrat-black-italic text-4xl md:text-5xl text-gray-900">
                  Inclusión Social
                </h2>
              </div>
              <p className="font-geist-medium text-xl text-gray-600 mb-8">
                Una ciudad próspera es aquella que no deja a nadie atrás.
                Trabajaremos por la igualdad de oportunidades y el desarrollo
                integral de todas las personas.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
              <GraduationCap className="text-green-600 mb-4" size={32} />
              <h3 className="font-geist-bold text-xl text-gray-900 mb-3">
                Educación de Calidad
              </h3>
              <ul className="font-geist-medium text-gray-600 space-y-2">
                <li>• Becas estudiantiles municipales</li>
                <li>• Centros de apoyo escolar</li>
                <li>• Capacitación técnica y oficios</li>
                <li>• Universidad popular municipal</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
              <Briefcase className="text-green-600 mb-4" size={32} />
              <h3 className="font-geist-bold text-xl text-gray-900 mb-3">
                Empleo y Desarrollo
              </h3>
              <ul className="font-geist-medium text-gray-600 space-y-2">
                <li>• Bolsa de trabajo municipal</li>
                <li>• Microcréditos para emprendedores</li>
                <li>• Incubadora de empresas</li>
                <li>• Ferias de empleo mensuales</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
              <Heart className="text-green-600 mb-4" size={32} />
              <h3 className="font-geist-bold text-xl text-gray-900 mb-3">
                Asistencia Social
              </h3>
              <ul className="font-geist-medium text-gray-600 space-y-2">
                <li>• Centros de día para adultos mayores</li>
                <li>• Programa de asistencia alimentaria</li>
                <li>• Apoyo a personas con discapacidad</li>
                <li>• Refugios para situaciones de violencia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Eje 3: Innovación y Tecnología */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <Lightbulb className="text-white" size={32} />
                </div>
                <h2 className="font-montserrat-black-italic text-4xl md:text-5xl text-gray-900">
                  Innovación y Tecnología
                </h2>
              </div>
              <p className="font-geist-medium text-xl text-gray-600 mb-8">
                Corrientes debe ser una ciudad inteligente, conectada y
                eficiente. La tecnología será nuestra aliada para mejorar los
                servicios y la calidad de vida.
              </p>
            </div>
            <div>
              <Image
                src="https://beecrowd.com/wp-content/uploads/2024/04/2022-02-22-Principais-tendencias.jpg"
                alt="Innovación y tecnología en Corrientes"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Smartphone className="text-purple-600 mb-4" size={32} />
              <h3 className="font-geist-bold text-xl text-gray-900 mb-3">
                Gobierno Digital
              </h3>
              <ul className="font-geist-medium text-gray-600 space-y-2">
                <li>• App municipal para trámites</li>
                <li>• Pagos digitales de tasas</li>
                <li>• Turnos online para atención</li>
                <li>• Portal de transparencia activa</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Car className="text-purple-600 mb-4" size={32} />
              <h3 className="font-geist-bold text-xl text-gray-900 mb-3">
                Movilidad Inteligente
              </h3>
              <ul className="font-geist-medium text-gray-600 space-y-2">
                <li>• Sistema de transporte inteligente</li>
                <li>• Semáforos sincronizados</li>
                <li>• Estacionamiento medido digital</li>
                <li>• Monitoreo de tráfico en tiempo real</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Shield className="text-purple-600 mb-4" size={32} />
              <h3 className="font-geist-bold text-xl text-gray-900 mb-3">
                Seguridad Tecnológica
              </h3>
              <ul className="font-geist-medium text-gray-600 space-y-2">
                <li>• Cámaras de seguridad HD</li>
                <li>• Centro de monitoreo 24/7</li>
                <li>• Botones de pánico en espacios públicos</li>
                <li>• App de seguridad ciudadana</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Eje 4: Salud y Bienestar */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-last md:order-first">
              <Image
                src="https://industrialrelationsnews.ioe-emp.org/index.php?eID=dumpFile&t=p&p=107005&token=c7da494be56f8c99d291e3e0401bdcf5871ee51c"
                alt="Salud y bienestar en Corrientes"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <Heart className="text-white" size={32} />
                </div>
                <h2 className="font-montserrat-black-italic text-4xl md:text-5xl text-gray-900">
                  Salud y Bienestar
                </h2>
              </div>
              <p className="font-geist-medium text-xl text-gray-600 mb-8">
                La salud es un derecho fundamental. Fortaleceremos el sistema de
                salud público y promoveremos hábitos saludables para toda la
                comunidad.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-red-600">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-red-600" size={24} />
              </div>
              <h3 className="font-geist-bold text-lg text-gray-900 mb-3">
                Centros de Salud
              </h3>
              <p className="font-geist-medium text-gray-600 text-sm">
                5 nuevos centros de atención primaria en barrios periféricos
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-red-600">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-red-600" size={24} />
              </div>
              <h3 className="font-geist-bold text-lg text-gray-900 mb-3">
                Programas Preventivos
              </h3>
              <p className="font-geist-medium text-gray-600 text-sm">
                Campañas de vacunación y controles médicos gratuitos
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-red-600">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-red-600" size={24} />
              </div>
              <h3 className="font-geist-bold text-lg text-gray-900 mb-3">
                Vida Saludable
              </h3>
              <p className="font-geist-medium text-gray-600 text-sm">
                Espacios deportivos y programas de actividad física
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-l-4 border-red-600">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-red-600" size={24} />
              </div>
              <h3 className="font-geist-bold text-lg text-gray-900 mb-3">
                Salud Mental
              </h3>
              <p className="font-geist-medium text-gray-600 text-sm">
                Centro municipal de atención psicológica gratuita
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat-black-italic text-4xl md:text-5xl text-gray-900 mb-6">
              Cronograma de Implementación
            </h2>
            <p className="font-geist-medium text-xl text-gray-600 max-w-3xl mx-auto">
              Un plan ordenado y realista para implementar todas nuestras
              propuestas durante los cuatro años de gestión municipal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-full inline-block mb-4">
                <span className="font-geist-bold">Año 1</span>
              </div>
              <h3 className="font-geist-bold text-xl text-gray-900 mb-4">
                Bases y Fundamentos
              </h3>
              <ul className="font-geist-medium text-gray-600 space-y-2 text-sm">
                <li>• Modernización administrativa</li>
                <li>• Inicio del gobierno digital</li>
                <li>• Primeros centros de salud</li>
                <li>• Plan maestro de desarrollo urbano</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-green-600 text-white px-4 py-2 rounded-full inline-block mb-4">
                <span className="font-geist-bold">Año 2</span>
              </div>
              <h3 className="font-geist-bold text-xl text-gray-900 mb-4">
                Infraestructura
              </h3>
              <ul className="font-geist-medium text-gray-600 space-y-2 text-sm">
                <li>• Pavimentación masiva</li>
                <li>• Nuevos espacios verdes</li>
                <li>• Sistema de transporte inteligente</li>
                <li>• Programas sociales ampliados</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-purple-600 text-white px-4 py-2 rounded-full inline-block mb-4">
                <span className="font-geist-bold">Año 3</span>
              </div>
              <h3 className="font-geist-bold text-xl text-gray-900 mb-4">
                Consolidación
              </h3>
              <ul className="font-geist-medium text-gray-600 space-y-2 text-sm">
                <li>• Viviendas sociales</li>
                <li>• Universidad popular</li>
                <li>• Seguridad tecnológica completa</li>
                <li>• Incubadora de empresas</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="bg-red-600 text-white px-4 py-2 rounded-full inline-block mb-4">
                <span className="font-geist-bold">Año 4</span>
              </div>
              <h3 className="font-geist-bold text-xl text-gray-900 mb-4">
                Proyección Futura
              </h3>
              <ul className="font-geist-medium text-gray-600 space-y-2 text-sm">
                <li>• Ciudad completamente digital</li>
                <li>• Corrientes ciudad inteligente</li>
                <li>• Evaluación y mejora continua</li>
                <li>• Proyectos de largo plazo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat-black-italic text-4xl md:text-5xl mb-8">
            Juntos Construiremos el Futuro
          </h2>
          <p className="font-geist-medium text-xl mb-8 text-red-100 leading-relaxed">
            Estas propuestas son el resultado de años de experiencia y diálogo
            con los vecinos. Pero el verdadero cambio lo haremos juntos, con tu
            participación y compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.bit.ly/VamosCtesCapital"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center text-lg px-8 py-4"
            >
              Sumate al proyecto
            </a>
            <a
              href="/sobre-mi"
              className="btn-primary inline-flex items-center justify-center text-lg px-8 py-4 bg-white/20 hover:bg-white/30 border-white/30"
            >
              Conocé mi historia
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
