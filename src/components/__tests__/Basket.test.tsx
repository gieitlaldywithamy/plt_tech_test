import React from "react";
import { render, screen } from "@testing-library/react";
import Basket from "../Basket";

//TODO Figure out how to add to basket
describe("Basket", () => {
  it("renders", async () => {
    render(<Basket />);
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/basket")
  });
});
