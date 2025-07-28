"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  year: string;
  image: string;
}

interface CarouselProps {
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
}

export default function Carousel({
  image1,
  image2,
  image3,
  image4,
}: CarouselProps) {
  const experienceData: CarouselItem[] = [
    {
      id: 1,
      title: "Concejal de la Ciudad de Corrientes",
      description:
        "Representando los intereses de los ciudadanos en el Concejo Deliberante, impulsando ordenanzas para el desarrollo urbano y social.",
      year: "2015-2019",
      image:
        image1 ||
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Secretario de Obras Públicas",
      description:
        "Supervisando proyectos de infraestructura que mejoraron la calidad de vida de miles de correntinos.",
      year: "2019-2021",
      image:
        image2 ||
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Diputado Provincial",
      description:
        "Defendiendo los intereses de Corrientes en la Legislatura Provincial, promoviendo leyes de desarrollo económico y social.",
      year: "2021-2023",
      image:
        image3 ||
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Presidente de Comisión de Hacienda",
      description:
        "Liderando la gestión presupuestaria y fiscal, asegurando el uso eficiente de los recursos públicos.",
      year: "2022-2023",
      image:
        image4 ||
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experienceData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experienceData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === experienceData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [experienceData.length]);

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden rounded-xl shadow-2xl px-5">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {experienceData.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="bg-white p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-blue-600 font-geist-bold text-sm mb-2">
                      {item.year}
                    </div>
                    <h3 className="font-geist-bold text-2xl md:text-3xl text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="font-geist-medium text-gray-600 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="order-first md:order-last">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {experienceData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
