import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        {
          children
        }
      </div>
      <Footer />
    </div> 
  )
}

export default MainLayout
