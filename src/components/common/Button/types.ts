// 기본 인터페이스 정의
export interface ButtonBaseProps {
  text: string;
  className?: string; // 추가 스타일
  variant?: 'primary' | 'secondary' | 'outline'; // 버튼 스타일
  size?: 'sm' | 'md' | 'lg'; // 버튼 크기
}

// 링크 버튼용 인터페이스
export interface LinkButtonProps extends ButtonBaseProps {
  href: string;
  onClick?: never; // href가 있으면 onClick은 없어야 함
}

// 액션 버튼용 인터페이스
export interface ActionButtonProps extends ButtonBaseProps {
  onClick: () => void;
  href?: never; // onClick이 있으면 href는 없어야 함
}

// 통합 타입
export type ButtonProps = LinkButtonProps | ActionButtonProps; 