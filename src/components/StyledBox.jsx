import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(
  ({
    height,
    borderRadius,
    width,
    marginRight,
    marginTop,
    marginBottom,
    marginLeft,
    color,
    bgcolor,
    gap,
    padding,
    justifyContent = "center",
    alignItems = "center",
    maxWidth,
  }) => ({
    height: height,
    width: width,
    padding: padding,
    bgcolor: bgcolor,
    marginRight: marginRight,
    marginTop: marginTop,
    marginLeft: marginLeft,
    marginBottom: marginBottom,
    borderRadius: borderRadius,
    color: color,
    display: "flex",
    justifyContent: justifyContent,
    alignItems: alignItems,
    boxSizing: "border-box",
    gap: gap,
    maxWidth: maxWidth,
  })
);
