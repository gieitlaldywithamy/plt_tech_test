import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { useBasket } from "@/app/store/basket";
import { AddToBag } from "../AddToBag";

const productMock = {
  id: 0,
  colour: "Blue",
  name: "Example Product",
  price: 19.99,
  img: "/example.jpg",
};

describe("Add To Bag button", () => {
  it("renders", async () => {
    const addToBasketSpy = jest.spyOn(useBasket.getState(), "addToBasket");
    render(<AddToBag product={productMock} />);
    fireEvent.click(screen.getByRole("button"));
    expect(addToBasketSpy).toHaveBeenCalled();
  });
});
