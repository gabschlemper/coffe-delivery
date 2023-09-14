import espresso from "../../../assets/coffes/espresso.svg";
import americano from "../../../assets/coffes/americano.svg";
import creamyespresso from "../../../assets/coffes/creamy-espresso.svg";
import coldCoffe from "../../../assets/coffes/cold-coffe.svg";
import coffeWithMilk from "../../../assets/coffes/coffe-with-milk.svg";
import latte from "../../../assets/coffes/latte.svg";
import capuccino from "../../../assets/coffes/capuccino.svg";
import macchiato from "../../../assets/coffes/macchiato.svg";
import mochaccino from "../../../assets/coffes/mochaccino.svg";
import hotChocolate from "../../../assets/coffes/hot-chocolate.svg";
import cuban from "../../../assets/coffes/cuban.svg";
import hawaiian from "../../../assets/coffes/hawaiian.svg";
import arabian from "../../../assets/coffes/arabian.svg";
import irish from "../../../assets/coffes/irish.svg";

export interface DataProps {
  id: number;
  type: string;
  title: string;
  description: string;
  price: st.ing;
  tags: string[];
  image: string;
  quantityOfItems: number;
}

export const initialState: DataProps[] = [
  {
    id: 1,
    type: "espresso",
    title: "Espresso",
    description: "Traditional coffee made with hot water and ground beans",
    price: "3.40",
    tags: ["traditional"],
    image: espresso,
    quantityOfItems: 0,
  },
  {
    id: 2,
    type: "espresso-americano",
    title: "Espresso Americano",
    description: "Diluted espresso, less intense than the traditional one",
    price: "3.45",
    tags: ["traditional"],
    image: americano,
    quantityOfItems: 0,
  },
  {
    id: 3,
    type: "creamy-americano",
    title: "Creamy espresso",
    description: "Traditional espresso with creamy foam",
    price: "3.60",
    tags: ["traditional"],
    image: creamyespresso,
    quantityOfItems: 0,
  },
  {
    id: 4,
    type: "cold-coffe",
    title: "Cold Coffe",
    description: "Drink prepared with espresso coffee and ice cubes",
    price: "3.40",
    tags: ["traditional", "cold"],
    image: coldCoffe,
    quantityOfItems: 0,
  },
  {
    id: 5,
    type: "coffe-milk",
    title: "Coffe milk",
    description: "Half traditional espresso with steamed milk",
    price: "3.80",
    tags: ["traditional", "milk"],
    image: coffeWithMilk,
    quantityOfItems: 0,
  },
  {
    id: 6,
    type: "latte",
    title: "Latte",
    description: "A shot of espresso with twice as much milk and creamy foam",
    price: "4.00",
    tags: ["traditional", "milk"],
    image: latte,
    quantityOfItems: 0,
  },
  {
    id: 7,
    type: "capuccino",
    title: "Capuccino",
    description:
      "Cinnamon drink made from equal doses of coffee, milk and foam",
    price: "4.00",
    tags: ["traditional", "milk"],
    image: capuccino,
    quantityOfItems: 0,
  },
  {
    id: 8,
    type: "macchiato",
    title: "Macchiato",
    description: "Espresso coffee mixed with a little hot milk and foam",
    price: "4.20",
    tags: ["traditional", "milk"],
    image: macchiato,
    quantityOfItems: 0,
  },
  {
    id: 9,
    type: "mochaccino",
    title: "Mochaccino",
    description: "Espresso coffee mixed with a little hot milk and foam",
    price: "4.20",
    tags: ["traditional", "milk"],
    image: mochaccino,
    quantityOfItems: 0,
  },
  {
    id: 10,
    type: "hot-chocolate",
    title: "Hot Chocolate",
    description: "Drink made with chocolate dissolved in hot milk and coffee",
    price: "4.40",
    tags: ["special", "milk"],
    image: hotChocolate,
    quantityOfItems: 0,
  },
  {
    id: 11,
    type: "cubano",
    title: "Cubano",
    description: "Iced espresso drink with rum, cream and mint",
    price: "4.75",
    tags: ["special", "cold", "alcoholic"],
    image: cuban,
    quantityOfItems: 0,
  },
  {
    id: 12,
    type: "hawaiian",
    title: "Hawaiian",
    description: "Sweet drink prepared with coffee and coconut milk",
    price: "3.40",
    tags: ["special"],
    image: hawaiian,
    quantityOfItems: 0,
  },
  {
    id: 13,
    type: "arabian",
    title: "Arabian",
    description: "Drink prepared with Arabic coffee beans and spices",
    price: "4.50",
    tags: ["special"],
    image: arabian,
    quantityOfItems: 0,
  },
  {
    id: 14,
    type: "irish",
    title: "Irish",
    description:
      "Drink based on coffee, Irish whiskey, sugar and whipped cream",
    price: "5.50",
    tags: ["special", "alcoholic"],
    image: irish,
    quantityOfItems: 0,
  },
];
