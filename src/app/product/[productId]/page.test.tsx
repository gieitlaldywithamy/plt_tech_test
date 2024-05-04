import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import Page from "./page";

import fetchMock from "jest-fetch-mock";
import { useBasket } from "@/app/store/basket";
fetchMock.enableMocks();

describe("Home Page", () => {
  it("on happy path, renders product details with an add to basket button", async () => {
    const addToBasketSpy = jest.spyOn(useBasket.getState(), "addToBasket");
    const res = {
      id: 1,
      colour: "Black",
      name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
      price: 10,
      img: "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
    };

    fetchMock.mockResponseOnce(JSON.stringify(res));
    const jsx = await Page({ params: { productId: "1" } });
    render(jsx);
    expect(screen.getByText(res.name));
    expect(screen.getByText("£10.00")).toBeInTheDocument();
    expect(screen.getByText("Colour:")).toBeInTheDocument();
    expect(screen.getByText(res.colour)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(addToBasketSpy).toHaveBeenCalled();
  });
  it("on unhappy path, throws an error", async () => {
    try {
      fetchMock.mockRejectOnce(() => Promise.reject("API is down"));
      const jsx = await Page({ params: { productId: "1" } });
      render(jsx);
      expect(screen.getByText("Foo")).toBeInTheDocument();
    } catch (e) {
      //TODO this test does nothing!
    }
  });
});
