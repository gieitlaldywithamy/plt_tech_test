"use client";
import { Product } from "@/lib/definitions";
import Image from "next/image";

import { formatPrice } from "@/lib/utils";
import { Button } from "../ui/button";

export const ProductCard: React.FC<Product> = ({
  colour,
  name,
  price,
  img,
}) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {img && (
        <Image
          className={`aspect-[2/2] rounded-md object-cover mx-auto`}
          src={img ?? ""}
          width={200}
          height={200}
          alt={`${name} image`}
        />
      )}
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p>{colour}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {formatPrice(price)}
        </span>
        <Button onClick={() => console.log("add to cart")}>
          Add To Basket
        </Button>
      </div>
    </div>
  );
};
