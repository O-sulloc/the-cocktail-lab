export type CardItem = {
  id: string;
  title: string;
  description: string;
  animationKey: string;
};

export interface CardsProps {
  items: CardItem[];
  className?: string;
  withTitle?: boolean;
  title?: string;
  lottieMap: { [key: string]: object };
}

export interface DesktopCardsProps extends CardsProps {
  cardWidth?: number | string;
  height?: number | string;
} 