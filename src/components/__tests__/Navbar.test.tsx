import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductPreview } from "../ProductPreview";
import Navbar from "../NavBar";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

const productMock = {
  id: 0,
  colour: "Blue",
  name: "Example Product",
  price: 19.99,
  img: "/example.jpg",
};

describe("Navbar", () => {
  it("renders links", async () => {
    render(<Navbar />);
    expect(screen.getByText("Pretty Little Thing")).toHaveAttribute("href", "/")
    expect(screen.getByText("Products")).toHaveAttribute("href", "/")
    expect(screen.getByTestId('navbar-basket')).toHaveAttribute("href", "/basket")
  });
});
