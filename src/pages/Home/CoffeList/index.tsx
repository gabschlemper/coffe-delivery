import { useContext } from "react";
import { Cart } from "../../../components/Cart";
import { Counter } from "../../../components/Counter";
import Typography from "../../../components/Typography";
import {
  ActionCard,
  Buttons,
  CoffeImage,
  Container,
  Grid,
  PriceCard,
  Tag,
  TagContainer,
} from "./styles";
import { CartContext } from "../../../contexts/CartContext";

export function CoffeList() {
  const { coffeeData } = useContext(CartContext);

  return (
    <>
      <Typography
        size="titleL"
        color="base-subtitle"
        fontFamily="'Baloo 2', cursiva"
        style={{ marginBottom: "3.5rem" }}
      >
        Our Coffes
      </Typography>
      <Grid>
        {coffeeData.map((item) => {
          return (
            <Container key={item.id}>
              <CoffeImage src={item.image} alt="" />
              <TagContainer>
                {item.tags.map((tag: string) => (
                  <Tag key={tag}>
                    <Typography size="tag" color="yellow-dark">
                      {tag.toUpperCase()}
                    </Typography>
                  </Tag>
                ))}
              </TagContainer>
              <Typography
                size="titleS"
                color="base-subtitle"
                fontFamily="'Baloo 2', cursiva"
                fontWeight="700"
              >
                {item.title}
              </Typography>
              <Typography
                size="textS"
                color="base-label"
                fontWeight="400"
                style={{ marginTop: "0.5rem", marginBottom: "2rem" }}
              >
                {item.description}
              </Typography>
              <ActionCard>
                <PriceCard>
                  €{" "}
                  <Typography size="titleM" fontFamily="'Baloo 2', cursiva">
                    {item.price}
                  </Typography>
                </PriceCard>
                <Buttons>
                  <Counter selectedItem={item} />
                  <Cart />
                </Buttons>
              </ActionCard>
            </Container>
          );
        })}
      </Grid>
    </>
  );
}
