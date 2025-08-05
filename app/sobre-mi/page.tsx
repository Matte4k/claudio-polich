import type { Metadata } from "next";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Users,
  Award,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Mi - Claudio Polich",
  description:
    "Conocé la historia de vida, formación y trayectoria política de Claudio Polich, candidato a Intendente de Corrientes.",
};

export default function SobreMiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-montserrat-black-italic text-4xl md:text-6xl mb-6">
              Mi Historia
            </h1>
            <p className="font-geist-medium text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Una vida dedicada al servicio público y al desarrollo de nuestra
              querida Corrientes
            </p>
          </div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-montserrat-black-italic text-3xl md:text-4xl text-gray-900 mb-6">
                Orígenes y Formación
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Calendar
                    className="text-red-600 mr-4 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-geist-bold text-lg text-gray-900 mb-2">
                      15 de marzo de 1978
                    </h3>
                    <p className="font-geist-medium text-gray-600">
                      Nací en la ciudad de Corrientes, en el barrio San Benito,
                      en una familia trabajadora que me inculcó los valores del
                      esfuerzo y la solidaridad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin
                    className="text-red-600 mr-4 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-geist-bold text-lg text-gray-900 mb-2">
                      Corrientes, mi ciudad natal
                    </h3>
                    <p className="font-geist-medium text-gray-600">
                      Crecí recorriendo cada rincón de nuestra ciudad,
                      conociendo sus necesidades, sus potencialidades y, sobre
                      todo, a su gente trabajadora y hospitalaria.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <GraduationCap
                    className="text-red-600 mr-4 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-geist-bold text-lg text-gray-900 mb-2">
                      Formación Académica
                    </h3>
                    <p className="font-geist-medium text-gray-600">
                      Me gradué como Licenciado en Administración Pública en la
                      Universidad Nacional del Nordeste (UNNE), especializándome
                      posteriormente en Gestión Municipal y Políticas Públicas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/img/polich-hero.jpg"
                alt="Claudio Polich"
                width={400}
                height={500}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Family Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-last md:order-first">
              <Image
                src="/img/familia-polich.jpg"
                alt="Claudio Polich con su familia"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="font-montserrat-black-italic text-3xl md:text-4xl text-gray-900 mb-6">
                Mi Familia
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Heart
                    className="text-red-500 mr-4 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-geist-bold text-lg text-gray-900 mb-2">
                      María Herminia, mi compañera de vida
                    </h3>
                    <p className="font-geist-medium text-gray-600">
                      Hace 15 años que compartimos sueños, proyectos y el amor
                      por nuestra ciudad. Ella es jueza y comparte mi vocación
                      de servicio a la comunidad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users
                    className="text-blue-600 mr-4 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-geist-bold text-lg text-gray-900 mb-2">
                      Nuestros hijos: Pedro y Mateo
                    </h3>
                    <p className="font-geist-medium text-gray-600">
                      Pedro tiene 25 años y Mateo 20. Ellos son mi mayor
                      motivación para trabajar por una Corrientes mejor, donde
                      puedan vivir con oportunidades y en un ambiente seguro.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="font-geist-medium text-gray-700 italic">
                    &quot;La familia es el núcleo de la sociedad, y desde mi
                    hogar he aprendido los valores que quiero llevar a la
                    gestión pública: honestidad, trabajo en equipo y compromiso
                    con el futuro.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Political Career Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat-black-italic text-4xl md:text-5xl text-gray-900 mb-6">
              Mi Carrera Política
            </h2>
            <p className="font-geist-medium text-xl text-gray-600 max-w-3xl mx-auto">
              Un camino de compromiso y servicio que comenzó desde joven,
              siempre con la convicción de trabajar por el bien común.
            </p>
          </div>

          <div className="space-y-12">
            {/* Timeline Item 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-[#00a7e7] text-white px-4 py-2 rounded-full inline-block mb-4">
                  <span className="font-geist-bold">2005</span>
                </div>
                <h3 className="font-geist-bold text-2xl text-gray-900 mb-4">
                  Director de Transporte de la Provincia
                </h3>
                <p className="font-geist-medium text-gray-600 mb-4">
                  Comencé mi carrera política como Director de Transporte de la
                  Provincia, donde aprendí el funcionamiento del gobierno local
                  y la importancia de escuchar a los vecinos.
                </p>
                <p className="font-geist-medium text-gray-600">
                  Durante este período, participé activamente en la redacción de
                  ordenanzas relacionadas con el transporte urbano.
                </p>
              </div>
              <div>
                <Image
                  src="/img/inicios-polich.jpg"
                  alt="Claudio Polich como Director"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-last md:order-first">
                <Image
                  src="/img/concejal.jpg"
                  alt="Claudio Polich como concejal"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div>
                <div className="bg-[#78be20] text-white px-4 py-2 rounded-full inline-block mb-4">
                  <span className="font-geist-bold">2005 - 2013</span>
                </div>
                <h3 className="font-geist-bold text-2xl text-gray-900 mb-4">
                  Concejal de la Ciudad
                </h3>
                <p className="font-geist-medium text-gray-600 mb-4">
                  Fui elegido concejal por primera vez en 2005, y reelecto en
                  2009, representando al distrito centro de la ciudad. Durante
                  mi mandato, impulsé más de 30 ordenanzas relacionadas con el
                  desarrollo urbano, la seguridad y los servicios públicos.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-geist-bold text-gray-900 mb-2">
                    Logros destacados:
                  </h4>
                  <ul className="font-geist-medium text-gray-600 space-y-1">
                    <li>• Ordenanza de Espacios Verdes Urbanos</li>
                    <li>• Programa de Bacheo Integral</li>
                    <li>• Sistema de Participación Ciudadana</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-[#68578d] text-white px-4 py-2 rounded-full inline-block mb-4">
                  <span className="font-geist-bold">2014 - 2019</span>
                </div>
                <h3 className="font-geist-bold text-2xl text-gray-900 mb-4">
                  Subsecretario de Entes Descentralizados del Ministerio de
                  Obras Públicas
                </h3>
                <p className="font-geist-medium text-gray-600 mb-4">
                  El Ministro me convocó para liderar la Subsecretaría de Entes
                  Descentralizados del Ministerio de Obras Públicas, donde pude
                  aplicar mi experiencia en gestión para mejorar la
                  infraestructura de la ciudad.
                </p>
                <p className="font-geist-medium text-gray-600">
                  Supervisé la construcción de más de 50 cuadras de pavimento,
                  la renovación de plazas y la modernización del sistema de
                  alumbrado público.
                </p>
              </div>
              <div>
                <Image
                  src="/img/subse-obras-publicas.jpg"
                  alt="Claudio Polich en obras públicas"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-last md:order-first">
                <Image
                  src="/img/ministro-obras-publicas.jpg"
                  alt="Claudio Polich como Ministro"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div>
                <div className="bg-[#da291c] text-white px-4 py-2 rounded-full inline-block mb-4">
                  <span className="font-geist-bold">2019 - 2025</span>
                </div>
                <h3 className="font-geist-bold text-2xl text-gray-900 mb-4">
                  Ministro de Obras Públicas
                </h3>
                <p className="font-geist-medium text-gray-600 mb-4">
                  El Gobernador me convocó para liderar el Ministerio de Obras
                  Públicas, donde pude aplicar mi experiencia en gestión para
                  mejorar la infraestructura de la ciudad.
                </p>
                <div className="flex items-start">
                  <Award
                    className="text-yellow-500 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="font-geist-medium text-gray-600">
                    Supervisé la construcción de más de 50 cuadras de pavimento,
                    la renovación de plazas y la modernización del sistema de
                    alumbrado público.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Item 5 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-[#ffc72c] text-white px-4 py-2 rounded-full inline-block mb-4">
                  <span className="font-geist-bold">2022 - 2025</span>
                </div>
                <h3 className="font-geist-bold text-2xl text-gray-900 mb-4">
                  Presidente del Comité Capital de la Unión Cívica Radical
                </h3>
                <p className="font-geist-medium text-gray-600 mb-4">
                  El Ministro me convocó para liderar la Subsecretaría de Entes
                  Descentralizados del Ministerio de Obras Públicas, donde pude
                  aplicar mi experiencia en gestión para mejorar la
                  infraestructura de la ciudad.
                </p>
                <p className="font-geist-medium text-gray-600">
                  Supervisé la construcción de más de 50 cuadras de pavimento,
                  la renovación de plazas y la modernización del sistema de
                  alumbrado público.
                </p>
              </div>
              <div>
                <Image
                  src="/img/comite-capital.jpg"
                  alt="Claudio Polich como Presidente del Comité Capital"
                  width={400}
                  height={300}
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat-black-italic text-4xl md:text-5xl mb-8">
            Mi Compromiso con Corrientes
          </h2>
          <p className="font-geist-medium text-xl mb-8 text-red-100 leading-relaxed">
            &quot;Cada experiencia vivida, cada desafío enfrentado y cada logro
            alcanzado me han preparado para este momento: liderar Corrientes
            hacia un futuro de prosperidad, inclusión y desarrollo
            sostenible.&quot;
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <p className="font-geist-medium text-lg text-red-100">
              Mi historia es la historia de muchos correntinos: trabajo,
              familia, compromiso y amor por nuestra tierra. Juntos podemos
              escribir el próximo capítulo de nuestra ciudad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
