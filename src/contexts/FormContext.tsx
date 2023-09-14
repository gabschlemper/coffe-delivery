import { ReactNode, createContext, useState } from "react";

interface AdressFormType {
  zipCode: string;
  street: string;
  houseNumber: string;
  neighborhood: string;
  city: string;
  state: string;
  complement?: string | undefined;
}

interface CheckoutFormContext {
  setCheckoutFormData: (data: AdressFormType) => void;
  checkoutFormData: AdressFormType;
  selectedPaymentOption: string;
  setSelectedPaymentOption: (selected: string) => void;
}

export const AdressFormContext = createContext({} as CheckoutFormContext);

interface AdressFormContextProviderProps {
  children: ReactNode;
}

export const AdressFormProvider = ({
  children,
}: AdressFormContextProviderProps) => {
  ``;
  const [checkoutFormData, setCheckoutFormData] = useState<AdressFormType>({
    zipCode: "",
    street: "",
    houseNumber: "",
    neighborhood: "",
    city: "",
    state: "",
    complement: "",
  });
  const [selectedPaymentOption, setSelectedPaymentOption] =
    useState<string>("");

  return (
    <AdressFormContext.Provider
      value={{
        setCheckoutFormData,
        checkoutFormData,
        selectedPaymentOption,
        setSelectedPaymentOption,
        // saveFormData,
      }}
    >
      {children}
    </AdressFormContext.Provider>
  );
};
