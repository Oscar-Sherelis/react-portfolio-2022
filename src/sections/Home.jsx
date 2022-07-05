// Styles and Styled Elements

import { styled, Box } from "@mui/system";
import { theme } from "../Theme";
import React from "react";
import {
  DefaultH1,
  DefaultParagraph,
  LightBlueH1,
} from "../components/text-elements/CustomTextEl";
import { StyledSection } from "../components/Section";

// Typewriting Effect

import useTypewriterEffect, {
  getTypewriter,
  useCursor,
} from "use-typewriter-effect";

export default function Home() {
  const [state, dispatch, isTyping] = useTypewriterEffect();
  const cursor = useCursor(isTyping);

  React.useEffect(() => {
    getTypewriter(dispatch)
      .type("Web developer")
      .pauseFor(1000)
      .deleteAll()
      .setLoop(true)
      .trigger();

    // React guaranties that dispatch reference is stable, so we can safely
    // declare it as a dependency
  }, [dispatch]);

  const JobTitle = styled(LightBlueH1)({
    visibility: cursor ? "visible" : "hidden",
    minWidth: "200px",
    whiteSpace: "break-spaces",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  });

  const CursorEl = styled("span")({
    color: theme.palette.primary.textMainColor,
  });

  return (
    <StyledSection id="home">
      <Box>
        <DefaultH1 component="h1">
          Hello, my name is <LightBlueH1>Oscar</LightBlueH1>
        </DefaultH1>

        <DefaultH1 component="h1" gutterBottom={true}>
          I am{" "}
          <JobTitle>
            {state}
            <CursorEl>|</CursorEl>
          </JobTitle>
        </DefaultH1>

        <DefaultParagraph>
          I'm a web developer with experience of over 1.5 years. My expertise is
          in creating responsive websites according to customer needs. I am
          seeking challenges and knowledge.
        </DefaultParagraph>
      </Box>
    </StyledSection>
  );
}
