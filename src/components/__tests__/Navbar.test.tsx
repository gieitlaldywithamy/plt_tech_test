import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar/NavBar";

describe("Navbar", () => {
  it("renders links", async () => {
    render(<Navbar />);
    expect(screen.getByText("Pretty Little Thing")).toHaveAttribute("href", "/")
    expect(screen.getByText("Products")).toHaveAttribute("href", "/")
    expect(screen.getByTestId('navbar-basket')).toHaveAttribute("href", "/basket")
  });
});
