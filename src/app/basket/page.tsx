"use client";

import { formatPrice } from "@/lib/utils";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useBasket } from "../store/basket";
import { Product } from "@/lib/definitions";

interface BasketItem extends Product {
  quantity: number;
}

const Page = () => {
  const { basket, removeFromBasket, decreaseQuantity, increaseQuantity } = useBasket();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold sm:text-4xl text-fuchsia-600">
          Your bag
        </h1>

        <ul className="divide-y divide-gray-200 border-b border-t border-gray-200">
          {basket.map(product => {
            return (
              <li key={product.id} className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                  <div className="relative h-24 w-24">
                    <Image
                      fill
                      src={product.img}
                      alt="product image"
                      className="h-full w-full rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>
                </div>

                <div className="ml-4 flex flex-col justify-between sm:ml-6">
                  <div>
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium">{product.name}</h3>
                      </div>

                      <p className="mt-1 text-sm font-medium text-gray-900">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                    <span>Quanity</span>
                    {/* TODO change to minus */}
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      aria-label="Decrease quantity"
                    >
                      <Minus />
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(product.id)}
                      aria-label="Increase quantity"
                    >
                      <Plus />
                    </button>
                  </p>
                  {/* TODO IS THIS ACCESSIBLE?? */}
                  <div className="mt-4 ">
                    <button
                      onClick={() => removeFromBasket(product.id)}
                      aria-label="Remove product from basket"
                    >
                      <Trash2 color="red" />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Page;
