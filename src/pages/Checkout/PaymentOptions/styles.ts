import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  input[type="radio"] {
    display: none;
  }
`;

export const Container = styled.div<{ selected: boolean }>`
  width: 100%;
  border-radius: 6px;
  background: ${(props) =>
    props.selected ? props.theme["purple-light"] : props.theme["base-button"]};
  :hover {
    background: ${(props) =>
      props.selected ? props.theme["purple-light"] : props.theme["base-hover"]};
  }
`;

export const LabelStyle = styled.label<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid
    ${(props) =>
      props.selected ? props.theme["purple"] : props.theme["base-button"]};
`;
