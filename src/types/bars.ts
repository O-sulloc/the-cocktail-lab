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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
  desc: string;
  how_big?: string;
} 