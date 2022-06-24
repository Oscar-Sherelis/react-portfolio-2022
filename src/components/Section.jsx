import { styled } from "@mui/system";
import { theme } from "../Theme";

const StyledSection = styled("section")({
  padding: theme.sectionSpacing,
  backgroundColor: theme.palette.secondary.main,
  height: theme.sectionHeight,
  display: "flex",
  alignItems: "center",
});

export { StyledSection };
