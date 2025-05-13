export type SizeSpec = { L: number; W: number; H: number };

export interface Bar {
  id: number;
  name: string;
  thumb: string;
  image: string;
  images?: string[];
  alt: string;
  inventory?: number;
  info?: boolean;
  slug: string;
  spec?: {
    cm?: SizeSpec;
    inch?: SizeSpec;
    [key: string]: any;
  };
  desc: string;
} 