## To run

First, run the development server (using package manager of choice! replace npm with pnpm or yarn):

```bash
npm install
npm run dev
```
## Requirements

The objective is to build a basic eCommerce web
based application (using NextJS) that integrates the
product and menu data from this DB

https://my-json-server.typicode.com/benirvingplt/products

There are a few basic shopping requirements
A user should be able to:
- View a list of products, with their price/info
- Add products to a basket
- Navigate to a basket screen
- Edit quantity/remove items from the basket screen

## Decisions

### Data-fetching:
For this sample application, we could take advantage of Server Components in Next's app router and execute both /products and /products/{id} on the server. For the landing page if more products were being retrieved and we decided on an infinite scroll approach, I would have pre-fetched the first page server side and fetched following pages client side while the user scrolled using react-query.
I was concerned the product list (/products) wouldn't be fresh so I have added in a time based cache reevaluation, in production I suspect this approach to caching would not work however upon reading the docs it seems we could send revalidatePath('/') when fresh data was added. I am assuming that product ids would not change and the db would have an auto incremental id approach when a new product has added so I have kept the default Nextjs Data Cache in place.

### State management:
The only piece of user state was a basket and I have chosen zustand to manage this with local storage keeping this basket to encourage users to purchase. I purposely avoided a context provider pattern as the basket would update too frequently and I feel the zustand store could easily be changed to redux if zustand was not well known or others did not agree it was a good choice. I'm not sure if this is considered 'cheating' and I'd happily change this. Admittedly I've never used zustand in a production environment and I felt the testing documentation for it was not quite clear.

### Testing:
I quickly realised it was a long time since I have unit tested anything and I'm not particularly happy with the coverage. I have tested the pages and these basic components however I am not proud of what I have achieved with this time period, I clearly need some practice!

I have used tailwind and this is responsive.

### Demo:
 [Download](https://github.com/gieitlaldywithamy/plt_tech_test/assets/9000501/2b845093-a957-4964-9dce-36aba837489b)
