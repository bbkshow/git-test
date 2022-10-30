import { styled, Button } from "@mui/material";

const ButtonStyle = styled(Button)(({ theme }) => {
  return {
    textTransform: "none",
    borderRadius: "8px",
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    height: 40,
    lineHeight: "18px",
    padding: "0px 12px",
  };
});

export function StyledButton({
  text,
  color = "info",
  variant = "contained",
  type = "submit",
  fullWidth = true,
  ...restProps
}) {
  return (
    <ButtonStyle
      type={type}
      fullWidth={fullWidth}
      color={color}
      variant={variant}
      {...restProps}
    >
      {text}
    </ButtonStyle>
  );
}
