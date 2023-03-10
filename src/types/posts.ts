export type Posts = {
  slug: string;
  title: string;
  image: string;
  description: string;
  date: string;
  isFeatured?: boolean;
  content?: string;
}[];
