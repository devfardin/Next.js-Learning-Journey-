'use client'
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold">My Website</h1>
        <nav className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"}`}>
          <Link href="/" className="p-2 hover:text-blue-600">Home</Link>
          <Link href="/about" className="p-2 hover:text-blue-600">About</Link>
          <Link href="/contact" className="p-2 hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

