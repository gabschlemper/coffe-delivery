import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 80rem;
  height: calc(100vh - 10rem);
  margin: 0 auto;
  padding: 0 2rem;

  background: ${(props) => props.theme["gray-800"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;
