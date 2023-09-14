import { ReactNode, createContext, useEffect, useState } from "react";
import { DataProps, initialState } from "../pages/Home/CoffeList/data";

interface CartContextProps {
  coffeeData: DataProps[];
  setCoffeeData: React.Dispatch<React.SetStateAction<DataProps[]>>;
  amountOfItemsInCart: number;
  itemsInCart: DataProps[];
  removeAllItemsFromCart: (item: DataProps) => void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartContextProviderProps) => {
  const [coffeeData, setCoffeeData] = useState<DataProps[]>(initialState);
  const [itemsInCart, setItemsInCart] = useState<DataProps[]>([]);

  const amountOfItemsInCart = itemsInCart.length;

  function removeAllItemsFromCart(item: DataProps) {
    const removedItemFromCart = itemsInCart.filter((cartItem) => {
      console.log(cartItem.id === item.id);
      if (cartItem.id === item.id) {
        return cartItem.id !== item.id;
      }
      return item;
    });
    setItemsInCart(removedItemFromCart);
  }

  useEffect(() => {
    const filterItemsInCart = coffeeData.filter(
      (coffee) => coffee.quantityOfItems > 0
    );
    setItemsInCart(filterItemsInCart);

    // const stateJSON = JSON.stringify(itemsInCart);
    // localStorage.setItem("@coffe-delivery:items_in_cart-1.0.0", stateJSON);
  }, [coffeeData]);
  ``;

  return (
    <CartContext.Provider
      value={{
        coffeeData,
        setCoffeeData,
        amountOfItemsInCart,
        itemsInCart,
        removeAllItemsFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
