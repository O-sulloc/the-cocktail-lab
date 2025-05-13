export interface Bar {
  id: number;
  name: string;
  thumb: string;
  image: string;
  alt: string;
  inventory?: number;
  info?: boolean;
  slug: string;
  spec?: Record<string, string | number | undefined>;
  desc: string;
} 