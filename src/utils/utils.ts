import { ProductType } from "./../types/type";
import { MIN_TEXT_LENGTH, MAX_TEXT_LENGTH } from "./../consts";
export const getUpperCaseFirst = (str: string): string =>
  str[0].toUpperCase() + str.slice(1);

export const getShortText = (text: string): string => {
  let shortText = text.slice(MIN_TEXT_LENGTH, MAX_TEXT_LENGTH);
  if (shortText.length < text.length) {
    shortText += "...";
  }

  return shortText;
};

export const calcMaxProductPrice = (product: ProductType[]): number => {
  if (product.length <= 0) {
    return 0;
  }

  let max = Number(product[0].price);

  product.forEach((product) => {
    if (max < Number(product.price)) {
      max = Number(product.price);
    }
  });

  return max;
};
