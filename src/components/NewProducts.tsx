import { ProductProp } from '@/type'
import React from 'react'
import ProductBox from './ProductBox'

interface NewProductsProps {
    products: ProductProp[]
}

const NewProducts = ({products}:NewProductsProps ) => {
  return (
    <div className="flex flex-col items-center bg-[#ececec]">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 w-[80%]">
      {products.length > 0 && products.map((product) => (
        <div key={product._id} className="p-5">
          <ProductBox {...product}/>
        </div>
      ))}
    </div>
    </div>
  )
}

export default NewProducts