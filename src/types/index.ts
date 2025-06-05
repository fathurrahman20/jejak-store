export type ActionResult = {
  error: string;
};

export type Tedit = {
  params: Promise<{ id: string }>;
};

export type TProduct = {
  id: string;
  imageUrl: string;
  name: string;
  categoryName: string;
  price: number;
};
