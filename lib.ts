import image1 from "/public/widgetImages/image1.png";
import image2 from "/public/widgetImages/image2.png";
import image3 from "/public/widgetImages/image3.png";
import image4 from "/public/widgetImages/image4.png";
import image5 from "/public/widgetImages/image5.png";
import image6 from "/public/widgetImages/image6.png";
import image7 from "/public/widgetImages/image7.png";
import image8 from "/public/widgetImages/image8.png";
import image9 from "/public/widgetImages/image9.png";

import featuredPost1 from "/public/featuredPost/featuredpost1.png";
import featuredPost2 from "/public/featuredPost/featuredpost2.png";
import featuredPost3 from "/public/featuredPost/featuredpost3.png";
import { FullProductT, ProductT } from "./typs";

export const homeSideWidgetImageData = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

export const featuredPostArray = [
  { alt: "featuredPost1", image: featuredPost1 },
  { alt: "featuredPost2", image: featuredPost2 },
  { alt: "featuredPost3", image: featuredPost3 },
];

export const baseUrl = "https://dummyjson.com/products";

export function discountedPrice(price: number, discountPercentage: number) {
  const discountDecimal = discountPercentage / 100.0;
  const total = price - price * discountDecimal;
  return total.toFixed(2);
}

export const calTotalPrice = (product: FullProductT[]) => {
  let totalPrice = 0;
  product.forEach((item) => {
    const quantity = item.quantity || 1;
    totalPrice +=
      Number(discountedPrice(item.price, item.discountPercentage)) * quantity;
  });
  return totalPrice.toFixed(2);
};
