"use server";

import { getPlaiceholder } from "plaiceholder";

export default async function getBase64(image: string) {
  try {
    const src = image;

    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);
    return base64;
  } catch (err) {
    throw new Error();
  }
}
