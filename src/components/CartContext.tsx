import { createContext, ReactNode, useState, useContext, useEffect } from "react";
export const CartContext = createContext([] as any);

export function CartContextProvider({ children }: { children: ReactNode }) {
    const [cartProducts, setCartProducts] = useState<string[]>(JSON?.parse(localStorage?.getItem('cart')||'[]'));
  useEffect(() => {
    if(cartProducts?.length > 0)
    {
      localStorage?.setItem('cart', JSON?.stringify(cartProducts));
    }
  }, [cartProducts]);
    

  useEffect(()=> {
    if (localStorage && localStorage.getItem('cart')) {
      setCartProducts(JSON.parse(localStorage.getItem('cart') || '[]'));
    }
  },[])
  function addProduct(productId: string): void {
    setCartProducts((prev) => [...prev, productId]);
  }

  function removeProduct(productId: string): void {
    setCartProducts((prev) => prev.filter((id) => id !== productId));
  }
  
  return (
    <CartContext.Provider value={{cartProducts, setCartProducts,addProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
}
