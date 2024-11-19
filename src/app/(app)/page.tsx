import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { Category } from "../../../sanity.types";
import { getAllCategories } from "@/sanity/lib/categories/getAllCategories";
import Image from "next/image";
import { getActiveSaleByCouponCode } from "@/sanity/lib/sales/getActiveSaleByCouponCode";
import { COUPON_CODES } from "@/sanity/lib/sales/couponCodes";

export default async function Home() {
  const products = await getAllProducts();
  const categories: Category[] = await getAllCategories();

  const sales = await getActiveSaleByCouponCode(COUPON_CODES.BFRIDAY);

  console.log("PRODUCTS NEXT", categories, sales);

  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen py-[40px] gap-[80px]">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i + 1}
          className="flex flex-col items-center justify-center gap-[10px]"
        >
          {products[0]?.productImage && (
            <Image
              src={products[0]?.productImage.url}
              alt="Product Image"
              placeholder="blur"
              blurDataURL={products[0]?.productImage.base64}
              width={380}
              height={380}
              sizes="(max-width: 768px) 100vw, 768px"
            />
          )}
          {products[0]?.name}
        </div>
      ))}
    </div>
  );
}
