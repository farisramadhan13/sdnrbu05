"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0">
      <div className="absolute inset-0 bg-white dark:bg-[#0a0118] border-b border-purple-500/20 shadow-[0_4px_20px_-10px_rgba(168,85,247,0.3)] transition-colors duration-300" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="w-12 h-12 flex items-center justify-center group-hover:scale-105 transition-transform">
                <img src="/image/logo/logo.png" alt="Logo SDN RBU 05" className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              </div>
              <span className="font-bold text-xl tracking-tight text-neon">
                SDN RBU 05
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/" className="hover:text-purple-500 transition-colors font-medium">Beranda</Link>
              <Link href="/profil" className="hover:text-purple-500 transition-colors font-medium">Profil</Link>
              <Link href="/layanan" className="hover:text-purple-500 transition-colors font-medium">Layanan</Link>
              <Link href="/artikel" className="hover:text-purple-500 transition-colors font-medium">Artikel</Link>
              <Link href="/galeri" className="hover:text-purple-500 transition-colors font-medium">Galeri</Link>
              <Link href="/kontak" className="hover:text-purple-500 transition-colors font-medium">Kontak</Link>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-purple-500/20 focus:outline-none transition-colors"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-purple-500">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-purple-500">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden relative border-t border-purple-500/20 bg-white dark:bg-[#0a0118]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-500/20 transition-colors">Beranda</Link>
            <Link href="/profil" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-500/20 transition-colors">Profil</Link>
            <Link href="/layanan" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-500/20 transition-colors">Layanan</Link>
            <Link href="/artikel" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-500/20 transition-colors">Artikel</Link>
            <Link href="/galeri" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-500/20 transition-colors">Galeri</Link>
            <Link href="/kontak" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-500/20 transition-colors">Kontak</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
