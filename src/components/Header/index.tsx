import logoSVG from "../../assets/logo.svg";
import locationSVG from "../../assets/icons/location.svg";
import { Cart } from "../Cart";
import { Container, Info, Location } from "./styles";

export function Header() {
  return (
    <Container>
      <img src={logoSVG} alt="" />

      <Info>
        <Location>
          <img src={locationSVG} alt="" />
          <span>Dublin, ie</span>
        </Location>

        <Cart variant="secondary" />
      </Info>
    </Container>
  );
}
