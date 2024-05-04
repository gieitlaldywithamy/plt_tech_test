import { Product } from "@/lib/definitions";
import { create } from "zustand";

interface BasketItem extends Product {
  quantity: number;
}

type BasketState = {
  basket: BasketItem[];
  addToBasket: (product: Product) => void;
  removeFromBasket: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  emptyBasket: () => void;
};

const getIndex = <T extends { id: number }>(items: T[], id: number) =>
  items.findIndex(({ id: itemId }) => itemId === id);

const removeItemById = <T extends { id: number }>(items: T[], id: number) =>
  items.filter(({ id: itemId }) => itemId !== id);

export const useBasket = create<BasketState>()((set) => ({
  basket: [],
  addToBasket: (product) =>
    set((state) => {
      const existingProductIndex = getIndex(state.basket, product.id);

      if (existingProductIndex !== -1) {
        const updatedBasket = [...state.basket];
        updatedBasket[existingProductIndex].quantity++;
        return { basket: updatedBasket };
      } else {
        return {
          basket: [...state.basket, { ...product, quantity: 1 }],
        };
      }
    }),
  decreaseQuantity: (productId) =>
    set((state) => {
      const existingProductIndex = getIndex(state.basket, productId);

      if (state.basket[existingProductIndex].quantity === 1) {
        return {
          basket: removeItemById(state.basket, productId),
        };
      } else {
        const updatedBasket = [...state.basket];
        updatedBasket[existingProductIndex].quantity--;
        return { basket: updatedBasket };
      }
    }),
  increaseQuantity: (productId: number) =>
    set((state) => {
      const existingProductIndex = getIndex(state.basket, productId);
      const updatedBasket = [...state.basket];
      updatedBasket[existingProductIndex].quantity++;
      return { basket: updatedBasket };
    }),
  removeFromBasket: (productId) =>
    set((state) => ({
      basket: removeItemById(state.basket, productId),
    })),
  emptyBasket: () => set({ basket: [] }),
}));
