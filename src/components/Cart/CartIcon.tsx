interface CartIconProps {
  variant: string;
}

export const CartIcon = ({ variant }: CartIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="none">
    <path
      fill={variant}
      d="M8.25 18.563a1.375 1.375 0 1 1-2.75 0 1.375 1.375 0 0 1 2.75 0Zm7.563-1.375a1.375 1.375 0 1 0 0 2.75 1.375 1.375 0 0 0 0-2.75Zm3.79-11.413a.696.696 0 0 0-.55-.275H4.15l-.696-2.44a1.384 1.384 0 0 0-1.324-.998H.688a.688.688 0 1 0 0 1.376H2.13l.842 2.93v.017l2.27 7.932a2.071 2.071 0 0 0 1.984 1.495h8.233a2.071 2.071 0 0 0 1.985-1.495l2.27-7.94a.688.688 0 0 0-.113-.602Z"
    />
  </svg>
);
export default CartIcon;
