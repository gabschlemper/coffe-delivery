import coffeBg from "../../../assets/coffe-bg.svg";
import bgImage from "../../../assets/home-backgroung.png";
import cart from "../../../assets/icons/cart.svg";
import pack from "../../../assets/icons/pack.svg";
import fresh from "../../../assets/icons/fresh.svg";
import clock from "../../../assets/icons/clock.svg";
import { Container, ImageBackground, IntroItems } from "./styles";
import Typography from "../../../components/Typography";

export function Hero() {
  return (
    <>
      <Container>
        <ImageBackground src={bgImage} />
        <div>
          <Typography
            size="titleXL"
            fontFamily="'Baloo 2', cursiva"
            color="base-title"
            style={{ paddingBottom: "1rem" }}
          >
            Find the perfect coffee anytime of the day!
          </Typography>
          <Typography size="textL" color="base-subtitle">
            With Coffee Delivery, you receive your coffee wherever you are,
            anytime.
          </Typography>
          <IntroItems>
            <div>
              <img src={cart} alt="" />
              Simple and safe
            </div>
            <div>
              <img src={pack} alt="" />
              Fast and tracked delivery
            </div>
            <div>
              <img src={fresh} alt="" />
              The packaging keeps the coffee intact
            </div>
            <div>
              <img src={clock} alt="" />
              Fresh to you
            </div>
          </IntroItems>
        </div>
        <img src={coffeBg} alt="" />
      </Container>
    </>
  );
}
