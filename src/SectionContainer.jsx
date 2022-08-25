import { Box, styled } from "@mui/system";
import Home from "./sections/Home";
import About from  "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { theme } from "./Theme";

export default function SectionContainer() {

    const Main = styled(Box)({
      position: "absolute",
      right: 0,
      width: "75%",
      height: "100vh",
      minHeight: "100vh",
      maxHeight: "100vh",
      overflowY: "scroll",
      overflowX: "hidden",
      [theme.breakpoints.down("sm")]: {
        width: "60%",
      },
    });

  return (
    <Main>
      <Home />
      <About />
      <Projects />
      <Contact />
    </Main>
  );
}
