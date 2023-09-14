import { StyledTypography, TypographyProps } from "./styles";

const Typography = ({
  size,
  fontWeight,
  color,
  children,
  fontFamily,
  style,
}: TypographyProps) => {
  return (
    <StyledTypography
      fontFamily={fontFamily}
      size={size}
      fontWeight={fontWeight}
      color={color}
      style={style}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
