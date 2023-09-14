import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Location = styled.div`
  color: ${(props) => props.theme["purple-dark"]};
  background-color: ${(props) => props.theme["purple-light"]};
  border-radius: 0.4rem;

  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;
