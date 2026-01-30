"use client"
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Click fuera del menú para cerrarlo
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { id: 'about', label: 'Quienes Somos', href: '/about' },
    { id: 'artistas', label: 'Artistas', href: '/artistas' },
    { id: 'obras', label: 'Obras', href: '/obras' },
    { id: 'actualidad', label: 'Actualidad', href: '/actualidad' },
    { id: 'contacto', label: 'Contacto', href: '/contacto' },
  ];

  return (
    <>
      {/* Botón hamburguesa flotante */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 right-8 w-16 h-16 flex items-center justify-center rounded-full 
          bg-[#1f1f1f] hover:bg-[#2a2a2a] transition-colors duration-300 z-50 shadow-lg"
      >
        <motion.div
          initial={false}
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMenuOpen ? <X size={32} className="text-white" /> : <Menu size={32} className="text-white" />}
        </motion.div>
      </button>

      {/* Overlay cuando el menú está abierto */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Slide Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 w-[400px] h-screen bg-[#121212] shadow-2xl z-50"
          >
            <div className="px-8 py-6 h-full flex flex-col">
              {/* Logo al inicio del menú */}
              <div className="flex justify-center mb-8">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/images/logo/logoxinkuart.png"
                    alt="XinkuArt Logo"
                    width={180}
                    height={50}
                    className="h-12 w-auto"
                  />
                </Link>
              </div>

              <nav className="space-y-6 flex-1">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block group"
                    >
                      <div className="relative px-4 py-3 rounded-lg transition-all duration-300 
                        hover:bg-[#1f1f1f] group">
                        <span className={`text-xl font-light tracking-wide transition-colors duration-300
                          ${pathname === item.href ? 'text-[#FF0000]' : 'text-[#a0a0a0] group-hover:text-[#FF0000]'}
                          font-['Cinzel', serif]`}
                        >
                          {item.label}
                        </span>
                        <motion.div
                          initial={false}
                          animate={{ 
                            width: pathname === item.href ? '100%' : '0%',
                            opacity: pathname === item.href ? 1 : 0
                          }}
                          className="absolute bottom-0 left-0 h-[1px] bg-[#FF0000]"
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="text-center text-[#7d7d7d] text-sm py-8">
                © 2024 XinkuArt
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;