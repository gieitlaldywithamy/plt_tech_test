"use client";

import { useBasket } from "@/app/store/basket";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export const Basket: React.FC = () => {
  const { basket } = useBasket();
  const numProductsInBasket = basket.length;
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/basket">
        <ShoppingCart />
        <span className="absolute -top-3 -right-3 bg-fuchsia-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numProductsInBasket}
        </span>
      </Link>
    </Button>
  );
};
export default Basket;
