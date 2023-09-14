import { DataProps } from "../../pages/Home/CoffeList/data";

export enum ActionTypes {
  ADD_COFFEE = "ADD_COFFEE",
  REMOVE_COFFEE = "REMOVE_COFFEE",
}

export function addCoffeToCart(coffeeData: DataProps[]) {
  return {
    type: ActionTypes.ADD_COFFEE,
    payload: {
      coffeeData,
    },
  };
}

export function removeCoffeeFromCart(coffeeData: DataProps[]) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeData,
    },
  };
}
