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
    <div className="flex flex-wrap items-center justify-center min-h-screen py-[80px] gap-[80px]">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i + 1}
          className="flex flex-col items-center justify-center gap-[20px]"
        >
          {products[0]?.productImage && (
            <div className="aspect-w-1 aspect-h-1 w-[380px] h-[380px]">
              <Image
                src={products[0]?.productImage.url}
                alt="Product Image"
                placeholder="blur"
                blurDataURL={products[0]?.productImage.base64}
                width={380}
                height={380}
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="w-full flex flex-col items-start justify-center gap-[5px]">
            <h1 className="text-2xl font-normal text-slate-900">
              {products[0]?.name}
            </h1>
            <p className="text-md font-normal text-slate-900">
              Price: ${products[0]?.price?.toLocaleString()}
            </p>
            <p className="text-md font-normal text-slate-900">
              Stock: {products[0]?.stock}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
