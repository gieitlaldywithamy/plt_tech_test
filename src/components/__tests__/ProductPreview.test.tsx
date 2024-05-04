import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductPreview } from "../ProductPreview";

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

describe("ProductPreview", () => {
  it("renders basic product details", async () => {
    render(<ProductPreview {...productMock} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/product/0")
    expect(screen.getByText("Example Product")).toBeInTheDocument();
    expect(screen.getByText("£19.99")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAccessibleName(`${productMock.name} image`)
  });
});
