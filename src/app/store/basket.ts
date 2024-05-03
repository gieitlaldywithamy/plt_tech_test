import { Product } from "@/lib/definitions";
import { create } from "zustand";

interface BasketItem extends Product {
  quantity: number;
}

export type Item = {
  product: BasketItem;
};

type BasketState = {
  basket: Item[];
  addToBasket: (product: Product) => void;
  removeFromBasket: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  emptyBasket: () => void;
};

export const useBasket = create<BasketState>()((set) => ({
  basket: [],
  addToBasket: (product) =>
    set((state) => {
      const existingProductIndex = state.basket.findIndex(
        (item) => item.product.id === product.id
      );
      if (existingProductIndex !== -1) {
        const updatedBasket = [...state.basket];
        updatedBasket[existingProductIndex].product.quantity++;
        return { basket: updatedBasket };
      } else {
        return {
          basket: [...state.basket, { product: { ...product, quantity: 1 } }],
        };
      }
    }),
  decreaseQuantity: (productId) =>
    set((state) => {
      // TODO needs refactoring
      const existingProductIndex = state.basket.findIndex(
        (item) => item.product.id === productId
      );
      const updatedBasket = [...state.basket];
      const existingQuantity = [...state.basket][existingProductIndex].product
        .quantity;
      if (existingQuantity === 1) {
        return {
          basket: state.basket.filter((item) => item.product.id !== productId),
        };
      } else {
        updatedBasket[existingProductIndex].product.quantity--;
        return { basket: updatedBasket };
      }
    }),
  removeFromBasket: (productId) =>
    set((state) => ({
      basket: state.basket.filter((item) => item.product.id !== productId),
    })),
  emptyBasket: () => set({ basket: [] }),
}));
