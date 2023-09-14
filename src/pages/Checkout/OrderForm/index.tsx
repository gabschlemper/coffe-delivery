import paymentIcon from "../../../assets/icons/payment.svg";
import Typography from "../../../components/Typography";
import { SelectedItems } from "../SelectedItems";
import { PaymentOptions } from "../PaymentOptions";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import {
  CartWrapper,
  Container,
  Form,
  TitleBox,
  Wrapper,
  SubmitButton,
  AdressFormContainer,
  GridItem1,
  GridItem2,
  GridItem3,
  GridItem7,
  GridItem6,
  GridItem5,
  GridItem4,
  InputStyle,
} from "./styles";
import { useContext } from "react";
import { AdressFormContext } from "../../../contexts/FormContext";

const schema = z.object({
  zipCode: z
    .string()
    .min(5, "Zip Code must be at least 5 characters")
    .max(8, "Zip Code must be at most 8 characters"),
  street: z.string().min(5, "Street must be at least 5 characters"),
  houseNumber: z
    .string()
    .min(2, "Number must be at least 5 characters")
    .max(5, "Number must be at most 8 characters"),
  complement: z.string().optional(),
  neighborhood: z.string().min(5, "Neighborhood must be at least 5 characters"),
  city: z.string().min(5, "City must be at least 5 characters"),
  state: z
    .string()
    .length(2, "State (UF) must be 2 characters")
    .nonempty("State (UF) is required"),
});

type CreateSchemaData = z.infer<typeof schema>;

export function OrderForm() {
  const { setCheckoutFormData, selectedPaymentOption } =
    useContext(AdressFormContext);
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreateSchemaData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  function submitData(data: CreateSchemaData) {
    setCheckoutFormData(data);
    navigate("/confirmed-order");
  }

  return (
    <Form onSubmit={handleSubmit(submitData)}>
      <Wrapper>
        <div>
          <Typography
            size="titleXS"
            color="base-subtitle"
            fontWeight="700"
            fontFamily="'Baloo 2', cursiva"
          >
            Complete your order
          </Typography>

          <AdressFormContainer>
            <Controller
              name="zipCode"
              control={control}
              render={() => (
                <GridItem1>
                  <InputStyle
                    type="text"
                    placeholder="Street"
                    {...register("street")}
                    error={!!errors.street}
                  />
                  {errors.street && (
                    <Typography
                      size="textXS"
                      style={{ color: "#ff2121", position: "absolute" }}
                    >
                      {errors.street.message}
                    </Typography>
                  )}
                </GridItem1>
              )}
            />
            <Controller
              name="street"
              control={control}
              render={() => (
                <GridItem2>
                  <InputStyle
                    type="text"
                    placeholder="Zip code"
                    autoFocus={false}
                    error={!!errors.zipCode}
                    {...register("zipCode")}
                  />
                  {errors.zipCode && (
                    <Typography
                      size="textXS"
                      style={{ color: "#ff2121", position: "absolute" }}
                    >
                      {errors.zipCode.message}
                    </Typography>
                  )}
                </GridItem2>
              )}
            />
            <Controller
              name="street"
              control={control}
              render={() => (
                <GridItem3>
                  <InputStyle
                    type="text"
                    placeholder="Number"
                    {...register("houseNumber")}
                    error={!!errors.houseNumber}
                  />
                  {errors.houseNumber && (
                    <Typography
                      size="textXS"
                      style={{ color: "#ff2121", position: "absolute" }}
                    >
                      {errors.houseNumber.message}
                    </Typography>
                  )}
                </GridItem3>
              )}
            />
            <GridItem4>
              <InputStyle
                type="text"
                placeholder="Complement"
                {...register("complement")}
              />
            </GridItem4>
            <Controller
              name="neighborhood"
              control={control}
              render={() => (
                <GridItem5>
                  <InputStyle
                    type="text"
                    placeholder="Neighborhood"
                    {...register("neighborhood")}
                    error={!!errors.neighborhood}
                  />
                  {errors.neighborhood && (
                    <Typography
                      size="textXS"
                      style={{ color: "#ff2121", position: "absolute" }}
                    >
                      {errors.neighborhood.message}
                    </Typography>
                  )}
                </GridItem5>
              )}
            />
            <Controller
              name="city"
              control={control}
              render={() => (
                <GridItem6>
                  <InputStyle
                    type="text"
                    placeholder="City"
                    {...register("city")}
                    error={!!errors.city}
                  />
                  {errors.city && (
                    <Typography
                      size="textXS"
                      style={{ color: "#ff2121", position: "absolute" }}
                    >
                      {errors.city.message}
                    </Typography>
                  )}
                </GridItem6>
              )}
            />
            <Controller
              name="state"
              control={control}
              render={() => (
                <GridItem7>
                  <InputStyle
                    type="text"
                    placeholder="UF"
                    {...register("state")}
                    error={!!errors.state}
                  />
                  {errors.state && (
                    <Typography
                      size="textXS"
                      style={{ color: "#ff2121", position: "absolute" }}
                    >
                      {errors.state.message}
                    </Typography>
                  )}
                </GridItem7>
              )}
            />
          </AdressFormContainer>

          <Container>
            <TitleBox>
              <img src={paymentIcon} />
              <div>
                <Typography size="textM" color="base-subtitle">
                  Payment
                </Typography>
                <Typography size="textS">
                  Payment is made on delivery. Choose the way you want to pay
                </Typography>
              </div>
            </TitleBox>

            <PaymentOptions />
          </Container>
        </div>

        <CartWrapper>
          <Typography
            size="titleXS"
            color="base-subtitle"
            fontWeight="700"
            fontFamily="'Baloo 2', cursiva"
          >
            Complete your order
          </Typography>

          <Container>
            <SelectedItems />
            <SubmitButton
              type="submit"
              disabled={!isValid || !selectedPaymentOption}
            >
              Confirm Order
            </SubmitButton>
          </Container>
        </CartWrapper>
      </Wrapper>
    </Form>
  );
}
