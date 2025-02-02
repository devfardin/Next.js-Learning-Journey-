"use client";
import React from 'react'
import { useState } from "react";
import { Menu, X } from "lucide-react";
const Button = () => {
  return (
    <button
    className="md:hidden"
    onClick={() => setSidebarOpen(false)}
  >
    <X size={24} />
  </button>
  )
}

export default Button
