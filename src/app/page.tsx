import { EmptyHeading } from "@/components/EmptyHeading";
import { ProductPreview } from "@/components/ProductPreview";
import { API_URL, Product } from "@/lib/definitions";

async function getProducts() {
  const res = await fetch(`${API_URL}/products/products`);

  if (!res.ok) {
    throw new Error("Failed to get products");
  }

  return res.json();
}

async function Page() {
  const products = await getProducts();

  return (
    <div className="flex flex-col mx-auto py-20 items-center gap-6">
      <h1
        role="heading"
        className="text-4xl font-bold text-gray-900 sm:text-6xl pb-4"
      >
        Welcome to <span className="text-pink-600">Pretty Little Thing</span>.
      </h1>
      <section className="border-t border-gray-200 bg-gray-50">
        {products.length > 0 ? (
          <ul
            role="list"
            className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          >
            {products.map(({ id, ...rest }: Product) => (
              <li key={id} data-testid={`product-preview-${id}`}>
                <ProductPreview id={id} {...rest} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyHeading>No Stock Found. Please check back later!!</EmptyHeading>
        )}
      </section>
    </div>
  );
}

export default Page;
