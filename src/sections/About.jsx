// Styles and Styled Elements

import { Box, styled } from "@mui/system";
import { ListItem, List } from "@mui/material";
import { StyledSection } from "../components/Section";
import { theme } from "../Theme";
import {
  DefaultH1,
  DefaultParagraph,
  LightBlueH3,
} from "../components/text-elements/CustomTextEl";

export default function About() {
  const AboutSection = styled(StyledSection)({
    height: "unset",
  });

  const DefaultList = styled(List)({
    listStyle: "disc",
  });

  const DefaultListItem = styled(ListItem)({
    fontSize: theme.fontSizes.p,
    padding: "5px 0 0 0",
    marginLeft: "1.8vw",
    color: theme.palette.secondary.textMainColor,
    position: "relative",
    "&:before": {
      position: "absolute",
      content: '"•"',
      color: theme.palette.primary.textMainColor,
      left: "-1.8vw",
      [theme.breakpoints.down("sm")]: {
        left: "-15px",
      },
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },

    [theme.breakpoints.down("sm")]: {
      marginLeft: "15px",
    },
  });

  // Education and Experience

  const EducationExperienceContainer = styled(Box)({
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  });

  const EducationDescription = styled(Box)({
    padding: "0 20px",
    position: "relative",
    maxWidth: "500px",
    "&:after": {
      content: "''",
      position: "absolute",
      display: "block",
      left: 0,
      top: "5px",
      borderRadius: "50%",
      width: "10px",
      height: "10px",
      backgroundSize: "10px",
      background: theme.palette.secondary.textMainColor,

      [theme.breakpoints.up("sm")]: {
        top: "0.65vw;",
      },
    },

    "&:not(:first-of-type)": {
      padding: "10px 20px 0 20px",
      "&:after": {
        top: "15px",

        [theme.breakpoints.up("sm")]: {
          top: "1.85vw;",
        },

        [theme.breakpoints.up("lg")]: {
          top: "1.45vw;",
        },

        [theme.breakpoints.up("xl")]: {
          top: "1.15vw;",
        },
      },
    },

    "&:before": {
      content: "''",
      position: "absolute",
      display: "block",
      left: "4px",
      top: 0,
      bottom: 0,
      width: "2px",
      background: theme.palette.primary.textMainColor,
    },
    "&:first-of-type": {
      "&:before": {
        top: "15px",
      },
    },
  });

  const ExperienceDescription = EducationDescription;

  return (
    <AboutSection id="about">
      <Box>
        <DefaultH1 component="h2">About me</DefaultH1>
        <DefaultParagraph>
          I am a communicative team player, I have good verbal and written
          communication skills in:
        </DefaultParagraph>
        <DefaultList>
          <DefaultListItem>Lithuanian</DefaultListItem>
          <DefaultListItem>English</DefaultListItem>
          <DefaultListItem>Polish</DefaultListItem>
          <DefaultListItem>Russian</DefaultListItem>
        </DefaultList>
        <DefaultParagraph gutterBottom={true}>
          I can use any of this language in work.
        </DefaultParagraph>
        {/* Education and experience */}
        <EducationExperienceContainer>
          <Box className="education">
            <LightBlueH3>Education</LightBlueH3>
            <EducationDescription>
              <DefaultParagraph>2015-2018</DefaultParagraph>
              <DefaultParagraph>
                The branch of the University of Bialystok in Vilnius „Faculty of
                Informatics”
              </DefaultParagraph>
            </EducationDescription>
            <EducationDescription>
              <DefaultParagraph>2019</DefaultParagraph>
              <DefaultParagraph>
                Codecademy 6 month Full-stack course.
              </DefaultParagraph>
              <DefaultList>
                <DefaultListItem>PHP</DefaultListItem>
                <DefaultListItem>
                  Styling: CSS3 Grid, Flex, Bootstrap
                </DefaultListItem>
                <DefaultListItem>Firebase</DefaultListItem>
                <DefaultListItem>MySQL</DefaultListItem>
                <DefaultListItem>MVC</DefaultListItem>
              </DefaultList>
            </EducationDescription>
          </Box>
          <Box className="experience">
            <LightBlueH3>Experience</LightBlueH3>
            <ExperienceDescription>
              <DefaultParagraph>2019</DefaultParagraph>
              <DefaultParagraph>Exadel internship</DefaultParagraph>
              <DefaultList>
                <DefaultListItem>Postman</DefaultListItem>
                <DefaultListItem>Promises</DefaultListItem>
                <DefaultListItem>HTTP requests</DefaultListItem>
                <DefaultListItem>Routes</DefaultListItem>
                <DefaultListItem>CSS</DefaultListItem>
                <DefaultListItem>Vue</DefaultListItem>
                <DefaultListItem>Vuex</DefaultListItem>
                <DefaultListItem>Node js</DefaultListItem>
                <DefaultListItem>MongoDB</DefaultListItem>
                <DefaultListItem>Mongoose</DefaultListItem>
              </DefaultList>
            </ExperienceDescription>
            <ExperienceDescription>
              <DefaultParagraph>2020-2021</DefaultParagraph>
              <DefaultParagraph>Webstrum Full-stack</DefaultParagraph>
              <DefaultList>
                <DefaultListItem>Prestashop</DefaultListItem>
                <DefaultListItem>Wordpress</DefaultListItem>
                <DefaultListItem>JS</DefaultListItem>
                <DefaultListItem>PHP</DefaultListItem>
                <DefaultListItem>Mysql</DefaultListItem>
              </DefaultList>
            </ExperienceDescription>

            <ExperienceDescription>
              <DefaultParagraph>2021-2022</DefaultParagraph>
              <DefaultParagraph>Zillion consulting Full-stack</DefaultParagraph>
              <DefaultList>
                <DefaultListItem>Maintenance</DefaultListItem>
                <DefaultListItem>Wordpress</DefaultListItem>
                <DefaultListItem>JS</DefaultListItem>
                <DefaultListItem>LESS</DefaultListItem>
                <DefaultListItem>PHP</DefaultListItem>
                <DefaultListItem>Mysql</DefaultListItem>
                <DefaultListItem>ACF</DefaultListItem>
                <DefaultListItem>CF7</DefaultListItem>
                <DefaultListItem>Widgets</DefaultListItem>
              </DefaultList>
            </ExperienceDescription>
          </Box>
        </EducationExperienceContainer>
      </Box>
    </AboutSection>
  );
}
