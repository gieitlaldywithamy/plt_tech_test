import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/lib/definitions";
import Image from "next/image";

async function getProducts() {
  const res = await fetch(
    "https://my-json-server.typicode.com/benirvingplt/products/products"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const products = await getProducts();
  console.log({ products });
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col mx-auto py-20 items-center gap-6">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl pb-4">
          Welcome to <span className="text-pink-600">Pretty Little Thing</span>.
        </h1>
        <section className="border-t border-gray-200 bg-gray-50">
          <ul role="list" className="flex flex-row flex-wrap m-2 gap-6">
            {products.map(({ id, ...rest }: Product) => (
              <li key={id}>
                <ProductCard id={id} {...rest} />{" "}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </MaxWidthWrapper>
  );
}
