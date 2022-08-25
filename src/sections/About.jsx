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
import { Description } from "@material-ui/icons";

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
    marginLeft: "18px",
    color: theme.palette.secondary.textMainColor,
    position: "relative",
    "&:before": {
      position: "absolute",
      content: '"•"',
      color: theme.palette.primary.textMainColor,
      left: "-18px",
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
        top: "7px",
      },
    },

    "&:not(:first-of-type)": {
      padding: "10px 20px 0 20px",
      "&:after": {
        top: "17px",
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

  const educationData = [
    {
      year: "2015-2018",
      description:
        "The branch of the University of Bialystok in Vilnius Faculty of Informatics",
      technologiesAndTools: [],
    },
    {
      year: "2019",
      description: "Codecademy 6 month Full-stack course.",
      technologiesAndTools: [
        "PHP",
        "Styling: CSS3 Grid, Flex, Bootstrap",
        "Firebase",
        "MySQL",
        "MVC",
      ],
    },
  ];

  const experienceData = [
    {
      year: "2019",
      description: "Exadel internship",
      technologiesAndTools: [
        "Postman",
        "Promises",
        "HTTP requests",
        "Routes",
        "CSS",
        "Vue",
        "Vuex",
        "Node js",
        "MongoDB",
        "Mongoose",
      ],
    },

    {
      year: "2020-2021",
      description: "Webstrum Full-stack developer",
      technologiesAndTools: ["Prestashop", "Wordpress", "JS", "PHP", "Mysql"],
    },
    {
      year: "2021-2022",
      description: "Zillion consulting Full-stack",
      technologiesAndTools: [
        "Maintenance",
        "Wordpress",
        "JS",
        "LESS",
        "PHP",
        "Mysql",
        "ACF",
        "CF7",
        "Widgets",
      ],
    },
  ];
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
            {educationData.map((education, educationIndex) => (
              <EducationDescription key={educationIndex}>
                <DefaultParagraph>{education.year}</DefaultParagraph>
                <DefaultParagraph>{education.description}</DefaultParagraph>
                {education.technologiesAndTools.length > 0 && (
                  <DefaultList>
                    {education.technologiesAndTools?.map(
                      (technology, technologyIndex) => (
                        <DefaultListItem key={technologyIndex}>
                          {technology}
                        </DefaultListItem>
                      )
                    )}
                  </DefaultList>
                )}
              </EducationDescription>
            ))}
          </Box>
          <Box className="experience">
            <LightBlueH3>Experience</LightBlueH3>

            {experienceData.map((experience, experienceIndex) => (
              <ExperienceDescription key={experienceIndex}>
                <DefaultParagraph>{experience.year}</DefaultParagraph>
                <DefaultParagraph>{experience.description}</DefaultParagraph>
                {experience.technologiesAndTools.length > 0 && (
                  <DefaultList>
                    {experience.technologiesAndTools?.map(
                      (technology, technologyIndex) => (
                        <DefaultListItem key={technologyIndex}>
                          {technology}
                        </DefaultListItem>
                      )
                    )}
                  </DefaultList>
                )}
              </ExperienceDescription>
            ))}
          </Box>
        </EducationExperienceContainer>
      </Box>
    </AboutSection>
  );
}
