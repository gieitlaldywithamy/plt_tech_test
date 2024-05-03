import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductCard } from "./ProductCard";
import { useBasket } from "@/app/store/basket";

const productMock = {
  id: 0,
  colour: "Blue",
  name: "Example Product",
  price: 19.99,
  img: "/example.jpg",
};

describe("ProductCard", () => {
  it("renders product details", async () => {
    const incSpy = jest.spyOn(useBasket.getState(), "addToBasket");
    render(<ProductCard {...productMock} />);
    expect(screen.getByText("Example Product")).toBeInTheDocument();
    expect(screen.getByText("Blue")).toBeInTheDocument();
    expect(screen.getByText("£19.99")).toBeInTheDocument();
    fireEvent.click(screen.getByText('Add To Basket'))
    expect(incSpy).toHaveBeenCalled();


  });
});
