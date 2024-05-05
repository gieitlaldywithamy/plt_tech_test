import React from "react";
import { render, screen } from "@testing-library/react";
import { BasketLink } from "../Navbar/BasketLink";


describe("BasketLink", () => {
  it("renders a link to the basket", async () => {
    render(<BasketLink />);
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/basket")
  });
});
