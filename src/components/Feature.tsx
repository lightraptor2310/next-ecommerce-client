'use client'
import Image from "next/image";
import React from "react";
import Button from '@mui/material/Button'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ProductProp } from "@/type";
import { CartContext } from "@/components/CartContext";
interface ProductFeaturedProps {
  product: ProductProp
}

const Feature = ({product}: ProductFeaturedProps) => {

  const { addProduct } = React.useContext<any>(CartContext);

  const addToCart = () => {
    addProduct(product._id);
  };
  return (
    <div className="bg-[#222] text-white py-12 px-8">
      <div className="grid grid-cols-2 gap-10">
        <div className="flex items-center">
          <div>
          <h1 className="text-5xl font-medium py-3">{product?.title}</h1>
          <p className="text-[#aaa] text-sm">
           {product?.description}
          </p>
          <div className="flex gap-3 mt-6">
            <Button variant="contained" color="primary" href={`/products/${product?._id}`}>
              Read more
            </Button>
            <Button variant="outlined" color="primary" onClick={addToCart} sx={{ gap: 1}}>
              <AddShoppingCartIcon />
              Add to cart
            </Button>
          </div>
          </div>
        </div>
        <div className="flex items-center flex-col">
            <Image src={`/macbook2.png`} alt="macbook" width={280} height={280} className=" max-w-[100%]"/>
        </div>
      </div>
    </div>
  );
};

export default Feature;
