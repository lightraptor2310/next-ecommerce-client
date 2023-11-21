'use client'
import Link from 'next/link'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from './CartContext'

const Header = () => {
  const { cartProducts } = useContext(CartContext);
  return (
    <header className='bg-black text-white p-5 flex flex-row justify-between items-center'>
        <p className='text-3xl font-bold'>Ecommerce web</p>
        <nav className='flex flex-row gap-5'>
        <Link href='/'>Home</Link>
        <Link href='/products'>All Products</Link>
        <Link href='/categories'>Categories</Link>
        <Link href='/account'>Account</Link>
        <Link href={'/cart'}>Cart ({cartProducts?.length})</Link>
        </nav>
    </header>
  )
}

export default Header