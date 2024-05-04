"use client";
import { Product } from "@/lib/definitions";
import Image from "next/image";

import { formatPrice } from "@/lib/utils";
import Link from "next/link";

export const ProductPreview: React.FC<Product> = (product) => {
  const { id, name, price, img } = product;
  return (
    <Link
      className="h-full w-full cursor-pointer bg-stone-200 hover:opacity-75 rounded-sm"
      data-testid="product-preview-link"
      href={`/product/${id}`}
    >
      <div className="relative w-full min-h-[30rem]">
        <Image
          src={img ?? ""}
          fill={true}
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 33vw"
          alt={`${name} image`}
        />
      </div>
      <div className="flex mt-5 flex-col px-5 pb-5">
        <h5 className="text-gray-700 normal-case">{name}</h5>
        <span className="font-thin text-gray-500">{formatPrice(price)}</span>
      </div>
    </Link>
  );
};
