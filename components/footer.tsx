import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { PiTiktokLogoBold } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-montserrat-black-italic text-2xl text-red-400 mb-4">
              Claudio Polich
            </h3>
            <p className="font-geist-medium text-gray-300 mb-4">
              Candidato a Intendente de la Ciudad de Corrientes. Trabajando por
              una ciudad más próspera y justa para todos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/claudiopolichok?rdid=EyVOxX6lz40zDSVj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15pEfZ9Q1P%2F#"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://x.com/claudiopolich?t=fh_rwUToNmC32dpTRu6ohw&s=08"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <BsTwitterX size={24} />
              </a>
              <a
                href="https://www.instagram.com/claudio_polich"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@claudiopolich?_t=ZM-8yGcHyk26kw&_r=1"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <PiTiktokLogoBold size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-geist-bold text-lg mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="font-geist-medium text-gray-300 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-mi"
                  className="font-geist-medium text-gray-300 hover:text-white transition-colors"
                >
                  Sobre Mi
                </Link>
              </li>
              <li>
                <Link
                  href="/ejes-de-gobierno"
                  className="font-geist-medium text-gray-300 hover:text-white transition-colors"
                >
                  Ejes de Gobierno
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-geist-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-red-400" />
                <span className="font-geist-medium text-gray-300">
                  contacto@claudiopolich.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-red-400" />
                <span className="font-geist-medium text-gray-300">
                  +54 379 XXX-XXXX
                </span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-3 text-red-400" />
                <span className="font-geist-medium text-gray-300">
                  Corrientes, Argentina
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="font-geist-medium text-gray-400">
            © 2024 Claudio Polich. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
