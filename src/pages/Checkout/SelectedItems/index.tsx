import { useContext } from "react";
import trash from "../../../assets/icons/trash.svg";
import { Counter } from "../../../components/Counter";
import Typography from "../../../components/Typography";
import { CartContext } from "../../../contexts/CartContext";
import {
  RemoveButton,
  Container,
  ActionsWrapper,
  Divider,
  TotalOfItems,
} from "./styles";

export function SelectedItems() {
  const { itemsInCart, removeAllItemsFromCart } = useContext(CartContext);

  let sumTotalOfItems = 0;
  for (const object of itemsInCart) {
    const price = parseFloat(object.price);
    const quantity = object.quantityOfItems;

    if (!isNaN(price) && !isNaN(quantity)) {
      sumTotalOfItems += price * quantity;
    }
  }

  const deliveryPrice = 3.5;
  const totalPrice = sumTotalOfItems + deliveryPrice;

  return (
    <>
      {itemsInCart.map((item) => {
        return (
          <div key={item.id}>
            <Container key={item.id}>
              <img src={item.image} alt="" />
              <div>
                <Typography size="textM">{item.title}</Typography>
                <ActionsWrapper>
                  <Counter selectedItem={item} />
                  <RemoveButton
                    type="button"
                    onClick={() => removeAllItemsFromCart(item)}
                  >
                    <img src={trash} alt="" />
                    Remove
                  </RemoveButton>
                </ActionsWrapper>
              </div>
              <Typography
                size="textM"
                fontWeight="700"
                style={{ marginLeft: "auto" }}
              >
                € {item.price}
              </Typography>
            </Container>
            <Divider />
          </div>
        );
      })}
      <TotalOfItems>
        <div>
          <Typography size="textS">Total of items</Typography>
          <Typography size="textS">€ {sumTotalOfItems.toFixed(2)}</Typography>
        </div>
        <div>
          <Typography size="textS">Delivery</Typography>
          <Typography size="textS">€ {deliveryPrice}</Typography>
        </div>
        <div>
          <Typography size="textL" fontWeight="700">
            Total
          </Typography>
          <Typography size="textL" fontWeight="700">
            € {totalPrice.toFixed(2)}
          </Typography>
        </div>
      </TotalOfItems>
    </>
  );
}
