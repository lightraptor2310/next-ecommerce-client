"use client"
import Header from '@/components/Header'
import { CartContextProvider } from '@/components/CartContext'
import React from 'react'
const App: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <>
    <CartContextProvider>
    <Header />
    {children}
  </CartContextProvider>
    </>
    
  )
}

export default App