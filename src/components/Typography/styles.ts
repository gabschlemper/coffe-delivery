import { ReactNode } from "react";
import styled from "styled-components";

const sizeMapping = {
  titleXL: 48,
  titleL: 32,
  titleM: 24,
  titleS: 20,
  titleXS: 18,
  textL: 20,
  textM: 16,
  textS: 14,
  textXS: 12,
  tag: 10,
  buttonG: 14,
  buttonM: 12,
} as const;

export interface TypographyProps {
  size: keyof typeof sizeMapping;
  fontWeight?: string;
  color?: string;
  children: ReactNode;
  fontFamily?: string;
  style?: React.CSSProperties;
}

export const StyledTypography = styled.p<TypographyProps>`
  font-size: ${({ size }) => [sizeMapping[size]]}px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  color: ${(props) =>
    props.color ? props.theme[props.color] : props.theme["base.text"]};
  font-family: ${({ fontFamily }) => fontFamily};
  line-height: 130%;
`;
