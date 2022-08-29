export type ProductProcessType = {
  products: ProductType[],
  error: string,
};

export type ProductType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};
