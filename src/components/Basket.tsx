"use client";

import { useBasket } from "@/app/store/basket";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export const Basket: React.FC = () => {
  const { basket } = useBasket();
  const numProductsInBasket = basket.length;
  return (
      <Link className="flex justify-center items-center relative hover:underline" href="/basket">
        <ShoppingCart />
        <span className="absolute -top-3 -right-3 bg-fuchsia-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numProductsInBasket}
        </span>
      </Link>
  );
};
export default Basket;
