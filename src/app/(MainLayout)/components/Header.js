'use client'
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold">My Website</h1>
        <nav className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"}`}>
          <Link href="/"
          className={pathname == '/' ? 'p-2 hover:text-red-400 text-green-500 font-medium text-xl' : 'p-2 hover:text-blue-600 font-medium text-xl'}>
            Home
          </Link>
          <Link href="/about"
          className={
            pathname == '/about' ?
            'p-2 hover:text-red-400 text-green-500 font-medium text-xl' : 'p-2 hover:text-blue-600 font-medium text-xl'
            }>
          About
          </Link>
          <Link href="/product"
          className={
            pathname == '/product' ?
            'p-2 hover:text-red-400 text-green-500 font-medium text-xl' : 'p-2 hover:text-blue-600 font-medium text-xl'
            }>
          Product
          </Link>
          <Link href="/posts"
          className={
            pathname == '/posts' ?
            'p-2 hover:text-red-400 text-green-500 font-medium text-xl' : 'p-2 hover:text-blue-600 font-medium text-xl'
            }>
            Posts 
          </Link>
          <Link href="/contact" className={pathname == '/contact' ? 'p-2 hover:text-red-400 text-green-500 font-medium text-xl' : 'p-2 hover:text-blue-600 font-medium text-xl'}>
          Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

