import { styled, Container } from "@mui/material";
import { theme } from "./Theme";
import CustomSidebar from "./components/Sidebar";
import SectionContainer from "./SectionContainer";
import "./css/App.css";

export default function App() {
  const CustomContainer = styled(Container)({
    display: "flex",
    padding: 0,
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      padding: 0,
    },
  });

  return (
    <div className="App">
      <CustomContainer>
        <CustomSidebar
          linkColor={theme.palette.primary.textMainColor}
          linkBorderOpacity={0.4}
        ></CustomSidebar>
        <SectionContainer />
      </CustomContainer>
    </div>
  );
}
