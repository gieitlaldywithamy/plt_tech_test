"use client";

import { useBasket } from "@/app/store/basket";
import { Product } from "@/lib/definitions";
import { useEffect, useState } from "react";

export const AddToBag: React.FC<{ product: Product }> = ({ product }) => {
  const { addToBasket } = useBasket();
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [isSuccess]);

  return (
    <button
      onClick={() => {
        addToBasket(product); setIsSuccess(true)
    }}
      className="bg-fuchsia-500 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded"
    >
      {isSuccess ? 'Added!' : 'Add to bag'}
    </button>
  );
};
