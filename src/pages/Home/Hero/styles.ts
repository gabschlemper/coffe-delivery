import styled from "styled-components";

export const ImageBackground = styled.img`
  position: absolute;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(20px);
  z-index: -10;
`;

export const Container = styled.div`
  display: flex;
  padding: 6rem 0;
  gap: 3.5rem;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IntroItems = styled.div`
  display: grid;
  margin-top: 64px;
  row-gap: 1.5rem;
  column-gap: 2.5rem;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  div {
    display: flex;
    align-items: center;
    gap: 0.9rem;
  }
`;
