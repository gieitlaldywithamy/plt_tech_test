
import { Product } from "@/lib/definitions";
import { create } from "zustand";

export type Item = {
  product: Product;
};

type BasketState = {
  basket: Item[];
  addToBasket: (product: Product) => void;
  emptyBasket: () => void;
};

export const useBasket = create<BasketState>()((set) => ({
  basket: [],
  addToBasket: (product) =>
    set((state) => {
      return { basket: [...state.basket, { product }] };
    }),
  emptyBasket: () => set({ basket: [] }),
}));
