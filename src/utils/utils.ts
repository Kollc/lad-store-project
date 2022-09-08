import { ProductType } from "./../types/type";
import {
  MIN_TEXT_LENGTH,
  MAX_TEXT_LENGTH,
  TypeSort,
  VectorSort,
} from "./../consts";
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

const sortProductByPrice = (
  products: ProductType[],
  vectorSort: VectorSort
): ProductType[] => {
  if (vectorSort === VectorSort.Asc) {
    return [...products].sort(
      (prev, next) => Number(next.price) - Number(prev.price)
    );
  }

  return [...products].sort(
    (prev, next) => Number(prev.price) - Number(next.price)
  );
};

const sortProductsByTitle = (
  products: ProductType[],
  vectorSort: VectorSort
): ProductType[] => {
  if (vectorSort === VectorSort.Asc) {
    return [...products].sort((prev, next) => {
      if (prev.title < next.title) {
        return -1;
      }
      if (prev.title > next.title) {
        return 1;
      }
      return 0;
    });
  }

  return [...products].sort((prev, next) => {
    if (prev.title < next.title) {
      return 1;
    }
    if (prev.title > next.title) {
      return -1;
    }
    return 0;
  });
};

export const sortProducts = (
  products: ProductType[],
  typeSort: TypeSort | null,
  vectorSort: VectorSort
): ProductType[] => {
  switch (typeSort) {
    case TypeSort.ByPrice:
      return sortProductByPrice(products, vectorSort);
    default:
      return sortProductsByTitle(products, vectorSort);
  }
};
