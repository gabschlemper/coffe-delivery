import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme["base-button"]};
  gap: 8px;
  padding: 8px 12px;
  border-radius: 6px;
  margin-right: 8px;
  button {
    border: none;
    background: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    display: flex;
  }
`;
