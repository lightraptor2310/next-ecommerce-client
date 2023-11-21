'use client'
import { ProductProp } from "@/type";
import Link from "next/link";
import React from "react";
import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from "./CartContext";

const ProductBox = (product: ProductProp) => {
  const { addProduct } = React.useContext<any>(CartContext);
  return (
    <div className="">
      <div className="bg-white p-5 h-[150px] text-center flex items-center justify-center rounded-[10px]">
      <div>
        <img src={`/macbook2.png`} alt={product?.title} className="max-w-full max-h-[80px]"/>
    </div>
      </div>
     <div className="mt-[5px]">
         <Link href={`/products/${product._id}`} className="font-normal text-base m-0">{product.title}</Link>
        <div className="md:flex md:gap-5 block items-center justify-between mt-[2px]">
            <div className=" text-base font-normal text-right md:text-lg md:font-semibold md:text-left">
                ${product.price}
            </div>
            <Button variant="outlined" color="primary" onClick={() => addProduct(product._id)}>
                Add to cart
            </Button>
        </div>
     </div>
    </div>
  );
};

export default ProductBox;
