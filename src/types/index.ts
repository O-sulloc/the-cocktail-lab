// Common types used across the application

// Hero section type (used in multiple components)
export interface Hero {
  title: string;
  description: string;
}

// Common button props
export interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
} 