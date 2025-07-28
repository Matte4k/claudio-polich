import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/carousel";
import { ArrowRight, Users, Building, Heart, Lightbulb } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-montserrat-black-italic text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                Una nueva visión para Corrientes
              </h1>
              <p className="font-geist-medium text-xl md:text-2xl mb-8 text-red-100 leading-relaxed">
                Con experiencia, compromiso y una visión clara del futuro,
                trabajemos juntos por una ciudad más próspera, inclusiva y
                moderna.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/sobre-mi"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Conocé mi historia
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link href="/ejes-de-gobierno" className="btn-secondary">
                  Ver propuestas
                </Link>
              </div>
            </div>
            <div className="order-first md:order-last">
              <Image
                src="/img/polich-hero.jpg"
                alt="Claudio Polich - Candidato a Intendente"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat-black-italic text-4xl md:text-5xl text-gray-900 mb-6">
              Experiencia al servicio de Corrientes
            </h2>
            <p className="font-geist-medium text-xl text-gray-600 max-w-3xl mx-auto">
              Más de una década dedicado al servicio público, con una
              trayectoria sólida en diferentes áreas del gobierno local y
              provincial.
            </p>
          </div>
          <Carousel
            image1="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
            image2="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
            image3="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop"
            image4="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
          />
        </div>
      </section>

      {/* Government Axes Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat-black-italic text-4xl md:text-5xl text-gray-900 mb-6">
              Ejes de Gobierno
            </h2>
            <p className="font-geist-medium text-xl text-gray-600 max-w-3xl mx-auto">
              Cuatro pilares fundamentales para transformar Corrientes en una
              ciudad del siglo XXI, próspera y con oportunidades para todos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="text-white" size={32} />
              </div>
              <h3 className="font-geist-bold text-xl text-gray-900 mb-3">
                Desarrollo Urbano
              </h3>
              <p className="font-geist-medium text-gray-600">
                Infraestructura moderna, espacios públicos renovados y una
                ciudad planificada para el crecimiento.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors duration-200">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="font-geist-bold text-xl text-gray-900 mb-3">
                Inclusión Social
              </h3>
              <p className="font-geist-medium text-gray-600">
                Programas sociales efectivos, educación de calidad y
                oportunidades para todos los sectores.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors duration-200">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="font-geist-bold text-xl text-gray-900 mb-3">
                Innovación
              </h3>
              <p className="font-geist-medium text-gray-600">
                Tecnología aplicada a la gestión pública, ciudad inteligente y
                gobierno digital.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-red-50 hover:bg-red-100 transition-colors duration-200">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="font-geist-bold text-xl text-gray-900 mb-3">
                Salud y Bienestar
              </h3>
              <p className="font-geist-medium text-gray-600">
                Sistema de salud fortalecido, espacios verdes y promoción del
                deporte y la cultura.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/ejes-de-gobierno"
              className="btn-primary inline-flex items-center"
            >
              Ver propuestas completas
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat-black-italic text-4xl md:text-5xl mb-6">
            Construyamos juntos el futuro de Corrientes
          </h2>
          <p className="font-geist-medium text-xl mb-8 text-red-100">
            Tu opinión es importante. Contáctame para compartir tus ideas,
            inquietudes o propuestas para nuestra ciudad.
          </p>
          <a
            href="https://www.bit.ly/VamosCtesCapital"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center text-lg px-8 py-4"
          >
            Contactar ahora
            <ArrowRight className="ml-2" size={24} />
          </a>
        </div>
      </section>
    </>
  );
}
