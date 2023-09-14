// import { DataProps } from "../../pages/Home/CoffeList/data";

// interface CoffeeState {
//   coffee: DataProps[];
//   itemsInCart: DataProps[];
// }

// const updatedCoffeeData = coffeeData.map((item) => {
//   if (item.id === selectedItem.id) {
//     return { ...item, quantityOfItems: item.quantityOfItems + 1 };
//   }
//   return item;
// });

// setCoffeeData(updatedCoffeeData);

// export function cartReducer(state: CoffeeState, action: any) {
//   switch (action.type) {
//     case "ADD_COFFEE":
//       if (itemsInCart.id === state.itemsInCart.id) {
//         return {
//           ...state,
//           quantityOfItems: state.itemsInCart.quantityOfItems + 1,
//         };
//       }
//     case "REMOVE_COFFEE":
//     // if (item.id === itemsInCart.id) {
//     //   return { ...item, quantityOfItems: item.quantityOfItems + 1 };
//     // }
//     default:
//       return state;
//   }
// }
