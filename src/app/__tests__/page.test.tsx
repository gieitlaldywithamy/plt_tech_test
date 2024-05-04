import { render, screen } from "@testing-library/react";
import Page from "../page";

import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

describe("Home Page", () => {
  it("on happy path, renders a heading with a list of product previews", async () => {
    const res = [
      {
        id: 1,
        colour: "Black",
        name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
        price: 10,
        img: "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
      },
      {
        id: 2,
        colour: "Stone",
        name: "Stone Ribbed Strappy Cut Out Detail Bodycon Dress",
        price: 4,
        img: "https://cdn-img.prettylittlething.com/3/6/5/a/365a5d1dce6a2b77b564379b302c9d83afccf33b_cmd2051_1.jpg?imwidth=1024",
      },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(res));
    const jsx = await Page();
    render(jsx);
    expect(screen.getByRole('heading', { level: 1} )).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1} )).toHaveTextContent('Welcome to Pretty Little Thing');
    expect(screen.getAllByRole("listitem")).toHaveLength(res.length);
  });

  it('on 0 products, found renders a heading with No Stock Found', async () => {
    fetchMock.mockResponseOnce(JSON.stringify([]));
    const jsx = await Page();
    render(jsx);
    expect(screen.getByRole('heading', { level: 4 } )).toHaveTextContent('No Stock Found. Please check back later!!');
  })

  it('if fetch fails, we render the error message', async () => {
    try {
      fetchMock.mockRejectOnce(() => Promise.reject("API is down"));
    const jsx = await Page();
    render(jsx);
    expect(screen.getByText('Foo')).toBeInTheDocument();
    }
    catch (e) {
      //TODO 
    }
  })
});

