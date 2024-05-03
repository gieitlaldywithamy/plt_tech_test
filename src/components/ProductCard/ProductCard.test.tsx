import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductCard } from "./ProductCard";

const productMock = {
  id: 0,
  colour: "Blue",
  name: "Example Product",
  price: 19.99,
  img: "/example.jpg",
};

describe("ProductCard", () => {
  it("renders product details", () => {
    render(<ProductCard {...productMock} />);
    expect(screen.getByText("Example Product")).toBeInTheDocument();
    expect(screen.getByText("Blue")).toBeInTheDocument();
    expect(screen.getByText("£19.99")).toBeInTheDocument();
  });
});
