"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 gap-5">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 md:relative`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h1 className="text-lg font-bold">Dashboard</h1>
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <Link href="/dashboard" className="block p-4 hover:bg-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard/profile" className="block p-4 hover:bg-gray-200">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings" className="block p-4 hover:bg-gray-200">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 ">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={25} />
          </button>
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>

        {/* Footer */}
        <footer className="bg-white text-center p-4 shadow">
          <p>&copy; {new Date().getFullYear()} My Dashboard</p>
        </footer>
      </div>
    </div>
  );
}
