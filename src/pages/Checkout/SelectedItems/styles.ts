import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: start;
  gap: 1.2rem;
  padding: 0.5rem 0.25rem 2rem 0.25rem;
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  > img {
    width: 64px;
    height: 64px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme["base-button"]};
  margin-bottom: 2rem;
`;

export const TotalOfItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["base-button"]};
  gap: 8px;
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

export const ActionsWrapper = styled.div`
  display: flex;
`;
