// import Typography from "../../../components/Typography";
import Typography from "../../../components/Typography";
import { Container, LabelStyle, Wrapper } from "./styles";
import creditCard from "../../../assets/icons/credit-card.svg";
import debitCard from "../../../assets/icons/debit-card.svg";
import cash from "../../../assets/icons/cash.svg";
import { useContext } from "react";
import { AdressFormContext } from "../../../contexts/FormContext";

interface PaymentOption {
  id: number;
  label: string;
  value: string;
  icon: string;
}

const paymentOptions: PaymentOption[] = [
  { id: 1, label: "Credit Card", value: "Credit Card", icon: creditCard },
  { id: 2, label: "Debit Card", value: "Debit Card", icon: debitCard },
  { id: 3, label: "Cash", value: "Cash", icon: cash },
];

export function PaymentOptions() {
  const { setSelectedPaymentOption, selectedPaymentOption } =
    useContext(AdressFormContext);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentOption(event.target.value);
  };

  return (
    <Wrapper>
      {paymentOptions.map((option) => (
        <Container
          key={option.id}
          selected={selectedPaymentOption === option.value}
        >
          <LabelStyle
            selected={selectedPaymentOption === option.value}
            key={option.id}
          >
            <input
              type="radio"
              value={option.value}
              checked={selectedPaymentOption === option.value}
              onChange={handleOptionChange}
            />
            <img src={option.icon} alt="" />
            <Typography size="buttonM">{option.label}</Typography>
          </LabelStyle>
        </Container>
      ))}
    </Wrapper>
  );
}
