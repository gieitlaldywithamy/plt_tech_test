import { AddToBag } from "@/components/AddToBag";
import { Product } from "@/lib/definitions";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";

async function getProduct(productId: string) {
  const res = await fetch(
    `https://my-json-server.typicode.com/benirvingplt/products/products/${productId}`
  );
  if (!res.ok) {
    throw new Error("Failed to get product");
  }

  return res.json();
}

type PageProps = {
  params: {
    productId: string;
  };
};

const Page = async ({ params }: PageProps) => {
  const { productId } = params;
  const product: Product = await getProduct(productId);
  const { img, name, price, colour } = product;
  return (
    <section className="grid md:grid-cols-2 sm:grid-cols-1 my-10">
      <div className="relative w-full flex justify-center">
        <Image alt={name} src={img} width={300} height={150} />
      </div>
      <div className="w-full flex flex-col items-start gap-2">
        <h2 className="font-heading text-2xl md:text-3xl">{name}</h2>
        <span className="text-gray-500">{formatPrice(price)}</span>
        <p>
          <span className="font-medium">Colour:</span>{" "}
          <span data-testid="pdp-current-colour">{colour}</span>
        </p>
        <AddToBag product={product} />
      </div>
    </section>
  );
};

export default Page;
