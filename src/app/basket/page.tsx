"use client";

import { useBasket } from "../store/basket";

const Page = () => {
  const { basket } = useBasket();
  console.log({ basket });

  return <div>hello world</div>;
};

export default Page;
