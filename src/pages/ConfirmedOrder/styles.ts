import { styled } from "styled-components";

export const Container = styled.div`
  padding-top: 5rem;
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2.5rem;
`;

export const DeliveryInformations = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 526px;
  padding: 2.5rem;
  gap: 2rem;
  position: relative;
  > div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  ::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    border: 1px solid transparent;
    background: linear-gradient(
        90deg,
        rgba(196, 127, 23, 1) 0%,
        rgba(128, 71, 248, 1) 100%
      )
      border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;
