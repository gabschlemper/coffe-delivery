import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import { Container } from "./styles";
import { DataProps } from "../../pages/Home/CoffeList/data";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

type CounterProps = {
  selectedItem?: DataProps | undefined;
};

export function Counter({ selectedItem }: CounterProps) {
  const { coffeeData, setCoffeeData } = useContext(CartContext);

  function AddItemToCart(selectedItem: DataProps | undefined) {
    const updatedCoffeeData = coffeeData.map((item) => {
      if (item.id === selectedItem?.id) {
        return { ...item, quantityOfItems: item.quantityOfItems + 1 };
      }
      return item;
    });

    setCoffeeData(updatedCoffeeData);
  }

  function RemoveItemFromCart(selectedItem: DataProps | undefined) {
    const updatedCoffeeData = coffeeData.map((item) => {
      if (item.id === selectedItem?.id) {
        return {
          ...item,
          quantityOfItems:
            item.quantityOfItems > 0 ? item.quantityOfItems - 1 : 0,
        };
      }
      return item;
    });
    setCoffeeData(updatedCoffeeData);
  }

  return (
    <Container>
      <button type="button" onClick={() => RemoveItemFromCart(selectedItem)}>
        <img src={minus} alt="" />
      </button>
      <span>{selectedItem ? selectedItem.quantityOfItems : 0}</span>
      <button type="button" onClick={() => AddItemToCart(selectedItem)}>
        <img src={plus} alt="" />
      </button>
    </Container>
  );
}
