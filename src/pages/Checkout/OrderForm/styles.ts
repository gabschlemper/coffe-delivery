import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
  }
`;

export const CartWrapper = styled.div`
  max-width: 28rem;
  > div {
    border-radius: 6px 44px;
  }
`;

export const Container = styled.div`
  background: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
`;

export const TitleBox = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: start;
  margin-bottom: 2rem;
`;

export const AdressFormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 1.5rem;
  grid-column-gap: 0.8rem;
  background: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
`;

const GridItem = styled.div`
  position: relative;
`;

export const GridItem1 = styled(GridItem)`
  grid-area: 2 / 1 / 3 / 7;
`;
export const GridItem2 = styled(GridItem)`
  grid-area: 1 / 1 / 2 / 3;
`;
export const GridItem3 = styled(GridItem)`
  grid-area: 3 / 1 / 4 / 3;
`;
export const GridItem4 = styled(GridItem)`
  grid-area: 3 / 3 / 4 / 7;
`;
export const GridItem5 = styled(GridItem)`
  grid-area: 4 / 1 / 5 / 3;
`;
export const GridItem6 = styled(GridItem)`
  grid-area: 4 / 3 / 5 / 6;
`;
export const GridItem7 = styled(GridItem)`
  grid-area: 4 / 6 / 5 / 7;
`;

export const InputStyle = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid
    ${(props) => (props.error ? "#ff2121" : props.theme["base-button"])};
  background-color: ${(props) => props.theme["base-input"]};
  &:focus {
    color: ${(props) => props.theme["base-text"]};
    border: 1px solid ${(props) => props.theme["base-label"]};
    box-shadow: none;
  }
`;

export const SubmitButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;
  border-radius: 6px;
  border: none;
  background-color: ${(props) =>
    props.disabled ? props.theme["base-button"] : props.theme["yellow"]};
  color: ${(props) => props.theme["white"]};
  text-transform: uppercase;
  margin-top: 2rem;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background: ${(props) =>
      props.disabled ? "default" : props.theme["yellow-dark"]};
  }
`;
