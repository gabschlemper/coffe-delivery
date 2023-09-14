import { useNavigate } from "react-router-dom";
import { Container, ItemsInCart } from "./styles";
import { CartIcon } from "./CartIcon";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Typography from "../Typography";

interface CartProps {
  variant?: "primary" | "secondary";
}

export function Cart({ variant = "primary" }: CartProps) {
  const { amountOfItemsInCart, itemsInCart } = useContext(CartContext);
  const navigate = useNavigate();

  const showAmountOfItemsInCart =
    amountOfItemsInCart > 0 && variant === "secondary";
  return (
    <>
      <Container
        variant={variant}
        onClick={() => navigate("/cart")}
        disabled={itemsInCart.length === 0}
      >
        <CartIcon variant={`${variant === "primary" ? "#FFF" : "#C47F17"}`} />
        {showAmountOfItemsInCart ? (
          <ItemsInCart>
            <Typography size="textS" fontWeight="700">
              {amountOfItemsInCart}
            </Typography>
          </ItemsInCart>
        ) : null}
      </Container>
    </>
  );
}
