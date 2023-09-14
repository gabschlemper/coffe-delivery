import { styled } from "styled-components";

const backgroundMapping = {
  primary: "purple-dark",
  secondary: "yellow-light",
} as const;

interface CartProps {
  variant: keyof typeof backgroundMapping;
  disabled: boolean;
}

export const Container = styled.button<CartProps>`
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: ${(props) => props.theme[backgroundMapping[props.variant]]};
  padding: 0.5rem;
  border-radius: 0.4rem;
  position: relative;
  opacity: ${(props) => (props.disabled ? 0.8 : 1)};
  &:hover {
    background-color: ${(props) =>
      props.variant === "primary" && !props.disabled ? "#8047F8" : "none"};
  }
`;
export const ItemsInCart = styled.div`
  position: absolute;
  right: -8.345px;
  top: -8px;
  background: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["white"]};
  border-radius: 100%;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
