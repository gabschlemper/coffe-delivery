import Typography from "../../components/Typography";
import { Container, DeliveryInformations, Hero } from "./styles";
import delivery from "../../assets/delivery.svg";
import { AdressFormContext } from "../../contexts/FormContext";
import { useContext } from "react";
import circleLocation from "../../assets/icons/circle-location.svg";
import circleClock from "../../assets/icons/circle-clock.svg";
import circlePayment from "../../assets/icons/circle-payment.svg";

export function ConfirmedOrder() {
  const { checkoutFormData, selectedPaymentOption } =
    useContext(AdressFormContext);

  return (
    <Container>
      <Typography size="titleL" color="yellow-dark" fontWeight="800">
        Yeah! Confirmed order.
      </Typography>
      <Typography size="textL">
        Now just wait for the coffee to come to you soon
      </Typography>
      <Hero>
        <DeliveryInformations>
          <div>
            <img src={circleLocation} alt="" />
            <Typography size="textM">
              Delivery in{" "}
              <strong>
                {checkoutFormData.street}, {checkoutFormData.houseNumber}
              </strong>
              <div>
                {checkoutFormData.neighborhood}, {checkoutFormData.city},{" "}
                {checkoutFormData.state}
              </div>
            </Typography>
          </div>
          <div>
            <img src={circleClock} alt="" />
            <Typography size="textM">
              Delivery forecast{" "}
              <div>
                <strong>20 min - 30 min</strong>
              </div>
            </Typography>
          </div>
          <div>
            <img src={circlePayment} alt="" />
            <Typography size="textM">
              Payment on delivery
              <div>
                <strong>{selectedPaymentOption}</strong>
              </div>
            </Typography>
          </div>
        </DeliveryInformations>
        <div>
          <img src={delivery} alt="" />
        </div>
      </Hero>
    </Container>
  );
}
