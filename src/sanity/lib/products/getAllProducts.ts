import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { Products } from "../../../../sanity.types";
import { imageBuilder } from "@/app/(app)/lib/sanityImageBuilder";
import getBase64 from "@/app/(app)/lib/generateBase64";

type ProcessedProduct = Products & {
  productImage: {
    url: string;
    base64: string;
  };
};

const processData = async (items: Products[]): Promise<ProcessedProduct[]> => {
  return Promise.all(
    items.map(async (item) => {
      if (item.productImage) {
        const productImageUrl = imageBuilder(item.productImage).url();
        const base64 = await getBase64(productImageUrl);
        return {
          ...item,
          productImage: {
            ...item.productImage,
            url: productImageUrl,
            base64,
          },
        };
      }
      return item as ProcessedProduct;
    })
  );
};

export const getAllProducts = async () => {
  const ALL_PRODUCTS_QUERY = defineQuery(`*[_type == "products"]`);

  try {
    const products = await sanityFetch({ query: ALL_PRODUCTS_QUERY });

    const processedProducts = await processData(products.data || []);

    return processedProducts || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
