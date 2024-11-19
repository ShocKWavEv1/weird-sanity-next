import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { Category, Products, Sales } from "../../../sanity.types";
import { getAllCategories } from "@/sanity/lib/categories/getAllCategories";
import Image from "next/image";
import { imageBuilder } from "./lib/sanityImageBuilder";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";
import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";

export default async function Home() {
  const products: Products[] = await getAllProducts();
  const categories: Category[] = await getAllCategories();

  const sales = await getActiveSaleByCouponCode(COUPON_CODES.BFRIDAY);

  console.log(products);
  console.log(categories);
  console.log(sales);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {products[0]?.name}
      {products[0]?.productImage && (
        <Image
          src={imageBuilder(products[0]?.productImage).url()}
          alt="Product Image"
          width={380}
          height={380}
          sizes="(max-width: 768px) 100vw, 768px"
        />
      )}
    </div>
  );
}
