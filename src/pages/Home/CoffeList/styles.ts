import { styled } from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.5rem 2rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem 1rem;
  }
  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.5rem 1rem;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme["base-card"]};
  max-width: 256px;
  width: 100%;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  margintop: 3.5rem;
`;

export const CoffeImage = styled.img`
  position: absolute;
  top: -25px;
  width: 120px;
  height: 120px;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-top: 5.5rem;
  margin-bottom: 1rem;
`;

export const Tag = styled.div`
  background-color: ${(props) => props.theme["yellow-light"]};
  padding: 4px 8px;
  border-radius: 100px;
  width: fit-content;
`;

export const ActionCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PriceCard = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Buttons = styled.div`
  display: flex;
`;
