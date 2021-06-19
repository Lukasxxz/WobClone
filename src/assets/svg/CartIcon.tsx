export interface CartIconProps {
  width?: number,
  height?: number,
  strokeColor?: string,
}

const CartIcon: React.FC<CartIconProps> = ({ width = 32, height = 32, strokeColor = 'currentcolor' }) => {
  return (
    <svg id="i-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={width} height={height} fill="none" stroke={strokeColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
      <circle cx="25" cy="27" r="2" />
      <circle cx="12" cy="27" r="2" />
    </svg>);
}

export default CartIcon;