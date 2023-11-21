"use client";
import React, { useContext, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { CartContext } from "@/components/CartContext";
import { Product } from "@/models/Product";
import axios from "axios";
import { countOccurrences } from "@/lib/library";
import { ProductProp } from "@/type";


const page = () => {
  const { cartProducts } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const ObjectProduct = countOccurrences(cartProducts);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios
        .post("/api/cart", { ids: Object.keys(ObjectProduct) })
        .then((res) => {
          setProducts(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);


  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find(p => p._id === productId)?.price || 0;
    total += price;
  }
  return (
    <>
      <div className=" max-w-[950px] mx-auto px-5">
        <div className="grid grid-cols-3 gap-10 mt-10">
          <div className="col-span-2 bg-[#ececec] rounded-lg p-7">
            {!cartProducts.length && (
              <p className="font-semibold text-2xl">Your cart is empty</p>
            )}
            {cartProducts.length > 0 && (
            <>
                <table className="w-full">
                        <tr>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Total</td>
                        </tr>
                    <tbody>
                        {products.map((product:any) =>(
                            <tr key={product._id}>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                                <td>{cartProducts.filter((id:any)=> id === product._id).length}</td>
                                <td>{product.price * cartProducts.filter((id:any)=> id === product._id).length}</td>
                            </tr>
                        ) )}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{total}</td>
                        </tr>
                    </tbody>
                </table>
            </>
            )}
          </div>
          {!!cartProducts.length && (
            <div className="col-span-1 bg-[#ececec] rounded-lg p-7 gap-2 flex flex-col">
              <p className="font-semibold text-2xl">Order Information</p>
              <input type="text" name="address" id="" placeholder="Address" />
              <input
                type="text"
                name="address2"
                id=""
                placeholder="Address 2"
              />
              <button className="bg-black text-white w-full p-1 rounded-sm">
                <p>Continued to payment</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
