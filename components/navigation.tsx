"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[url('/img/vamos-ctes-pattern.jpg')] bg-origin-border bg-left-bottom bg-contain shadow-lg bg-no-repeat-y sticky top-0 z-50 py-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="font-montserrat-black-italic text-3xl text-gray-700">
                Claudio Polich
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-geist-medium text-gray-700 hover:text-red-600 transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/sobre-mi"
              className="font-geist-medium text-gray-700 hover:text-red-600 transition-colors"
            >
              Sobre Mi
            </Link>
            <Link
              href="/mis-propuestas"
              className="font-geist-medium text-gray-700 hover:text-red-600 transition-colors"
            >
              Mis Propuestas
            </Link>
            <a
              href="https://www.bit.ly/VamosCtesCapital"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Sumate
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-4 pb-3 sm:px-3 bg-white border-t">
            <Link
              href="/"
              className="block px-3 py-2 font-geist-medium text-gray-700 hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/sobre-mi"
              className="block px-3 py-2 font-geist-medium text-gray-700 hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Sobre Mi
            </Link>
            <Link
              href="/mis-propuestas"
              className="block px-3 py-2 font-geist-medium text-gray-700 hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Mis Propuestas
            </Link>
            <a
              href="https://www.bit.ly/VamosCtesCapital"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-3 my-2 text-center btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Sumate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
