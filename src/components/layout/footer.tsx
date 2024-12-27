"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-[#a0a0a0] py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo y Descripción */}
          <div className="space-y-6">
            <Link href="/" className="block w-48">
              <Image
                src="/images/logo/logoxinkuart.png"
                alt="XinkuArt Logo"
                width={300}
                height={100}
                className="w-full h-auto"
              />
            </Link>
            <p className="text-sm">
              Galería de arte contemporáneo español, 
              dedicada a la promoción de artistas consolidados 
              y emergentes.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-white font-['Cinzel',serif] text-lg mb-6">Explora</h3>
            <ul className="space-y-4">
              {['Artistas', 'Obras', 'Exposiciones 3D', 'Actualidad'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm hover:text-[#FF0000] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-['Cinzel',serif] text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[#FF0000]" />
                <span className="text-sm">MADRID / ESPAÑA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#FF0000]" />
                <span className="text-sm">+34 635 914 646 </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#FF0000]" />
                <span className="text-sm">xinkuart@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-white font-['Cinzel',serif] text-lg mb-6">Síguenos</h3>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: 'https://instagram.com/xinkuart' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1f1f1f] flex items-center justify-center 
                           hover:bg-[#FF0000] transition-colors duration-300 group"
                >
                  <Icon size={20} className="text-white opacity-80 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea Divisoria */}
        <div className="h-px bg-white/10 my-8" />

        {/* Copyright y Enlaces Legales */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2024 XinkuArt. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <Link href="/legal/avisolegal" className="hover:text-[#FF0000] transition-colors duration-300">
              Aviso Legal
            </Link>
            <Link href="/legal/privacidad" className="hover:text-[#FF0000] transition-colors duration-300">
              Política de Privacidad
            </Link>
            <Link href="/legal/cookies" className="hover:text-[#FF0000] transition-colors duration-300">
              Política de Cookies
            </Link>
            <Link href="/legal/terminos" className="hover:text-[#FF0000] transition-colors duration-300">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;