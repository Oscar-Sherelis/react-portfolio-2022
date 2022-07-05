import { styled } from "@mui/system";
import { theme } from "../../Theme";
import { Typography } from "@mui/material";

const DefaultH1 = styled(Typography)({
  fontSize: theme.fontSizes.h1,
  color: theme.palette.primary.textMainColor,
  fontFamily: theme.globalFontFamily.manrope,
  variant: "h2",
  display: "block",
  whiteSpace: "break-spaces",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    inlineSize: "150px",
    overflowWrap: "break-word",
  },
});

const DefaultParagraph = styled(Typography)({
  fontSize: theme.fontSizes.p,
  color: theme.palette.primary.textMainColor,
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },

  [theme.breakpoints.down("sm")]: {
    overflowWrap: "break-word",
  },
});

const LightBlueH1 = styled("span")({
  color: theme.palette.secondary.textMainColor,
  fontSize: theme.fontSizes.h1,
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
});

const LightBlueH3 = styled("span")({
  color: theme.palette.secondary.textMainColor,
  fontSize: theme.fontSizes.h3,
  lineHeight: "2em",
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
  },
});

export { DefaultH1, DefaultParagraph, LightBlueH1, LightBlueH3 };
