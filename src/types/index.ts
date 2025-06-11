export type ActionResult = {
  error: string;
};

export type Tedit = {
  params: Promise<{ id: string }>;
};

export type TSlugParams = {
  params: Promise<{ slug: string }>;
};

export type TProduct = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
  categoryName: string;
  price: number;
};

export type TCart = TProduct & { quantity: number };
