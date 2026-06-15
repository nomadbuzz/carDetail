export type Service = {
  id: string;
  name: string;
  price: number;
  priceLabel: string;
  icon: string;
  description: string;
  features: readonly string[];
  popular?: boolean;
};

export type Review = {
  id: number;
  name: string;
  rating: number;
  text: string;
  service: string;
  date: string;
};

export type GalleryItem = {
  id: number;
  title: string;
  before: string;
  after: string;
  category: string;
};

export type FormStatus = "idle" | "loading" | "success" | "error";
