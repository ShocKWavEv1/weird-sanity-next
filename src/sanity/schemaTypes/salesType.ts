import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const salesType = defineType({
  name: "sales",
  title: "Sales",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Sales Title",
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Sales Description",
    }),
    defineField({
      name: "discountAmount",
      type: "number",
      title: "Discount Amount",
      description: "The amount of discount applied to the sale",
    }),
    defineField({
      name: "couponCode",
      type: "string",
      title: "Coupon Code",
    }),
    defineField({
      name: "validFrom",
      type: "datetime",
      title: "Valid From",
    }),
    defineField({
      name: "validUnitl",
      type: "datetime",
      title: "Valid Until",
    }),
    defineField({
      name: "isActive",
      type: "boolean",
      title: "Is Active",
      description: "Whether the sale is active or not",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      discountAmount: "discountAmount",
      couponCode: "couponCode",
      isActive: "isActive",
    },
    prepare(selection) {
      const status = selection.isActive ? "🟢" : "🔴";
      return {
        title: selection.title,
        subtitle: `${selection.discountAmount}% off - Code: ${selection.couponCode} - Status: ${status}`,
      };
    },
  },
});
