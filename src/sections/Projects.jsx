import React from "react";

// Styles and Styled Elements

import { StyledSection } from "../components/Section";
import { styled, Box } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Link } from "@mui/material";
import { theme } from "../Theme";

// Text Elements

import {
  DefaultH1,
  DefaultParagraph,
} from "../components/text-elements/CustomTextEl";

// Images

import memeGenerator from "../images/meme.png";
import gallery from "../images/gallery.png";
import weatherApp from "../images/weatherapp.png";
import phonenumberShare from "../images/phonenumbershare.png";
import pcShop from "../images/pc-shop.png";
import fileViewer from "../images/fileviewer.png";

export default function Projects() {
  const projects = [
    {
      name: "Weather app",
      technologies: "React",
      image: weatherApp,
      gitHubLink: "https://github.com/Oscar-Sherelis/react-ts-weather-app",
      demo: "https://oscar-weather-app.netlify.app"
    },
    {
      name: "Phonenumber share",
      technologies: "Laravel",
      image: phonenumberShare,
      gitHubLink: "https://github.com/Oscar-Sherelis/phonenumber_share",
      demo: "https://phonenumber-share.herokuapp.com"
    },
    {
      name: "PC shop",
      technologies: "Vue, Vuex",
      image: pcShop,
      gitHubLink: "https://github.com/Oscar-Sherelis/vuejs-desktops",
      demo: "https://oscar-sherelis-pc-shop.netlify.app"
    },
    {
      name: "Meme generator",
      technologies: "JS",
      image: memeGenerator,
      gitHubLink: "https://github.com/Oscar-Sherelis/meme_generator",
      demo: "https://meme-generator-oscar.netlify.app"

    },
    {
      name: "Gallery",
      technologies: "JS",
      image: gallery,
      gitHubLink: "https://github.com/Oscar-Sherelis/gallery",
      demo: "https://oscar-sherelis-gallery.netlify.app"
    },
    {
      name: "File viewer",
      technologies: "PHP",
      image: fileViewer,
      gitHubLink: "https://github.com/Oscar-Sherelis/open_file",
    },
  ];

  const ProjectsSection = styled(StyledSection)({
    height: "unset",
    display: "block",
  });

  const ProjectsContainer = styled(Box)({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "40px 20px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr",
    },
  });

  const Project = styled(Box)({
    borderTop: "2px solid",
    borderTopColor: theme.palette.secondary.textMainColor,
    maxWidth: "300px",
    overflow: "hidden",
  });

  const ProjectName = styled(DefaultParagraph)({
    color: theme.palette.secondary.textMainColor,
    marginTop: "10px",
  });

  const LinktToRepo = styled(IconButton)({
    color: theme.palette.secondary.textMainColor,
    marginRight: "15px",
    padding: "8px 0",
    "&:hover": {
      color: theme.palette.primary.main,
    }
  });

  const ProjectDemo = styled(Link)({
    fontSize: "16px",
    textDecoration: "none",
    color: theme.palette.secondary.textMainColor,
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
  });

  function ProjectImage({ imageURL }) {
    return (
      <Box
        sx={{
          backgroundImage: `url(${imageURL})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
          [theme.breakpoints.down("sm")]: { height: "150px" },
        }}
      ></Box>
    );
  }

  return (
    <ProjectsSection id="projects">
      <Box>
        <DefaultH1 component="h2" gutterBottom={true}>
          Projects
        </DefaultH1>
        <ProjectsContainer>
          {projects.map(({ name, image, technologies, gitHubLink, demo }, i) => (
            <Project key={i}>
              <ProjectImage imageURL={image}></ProjectImage>
              <ProjectName>{name}</ProjectName>
              <DefaultParagraph>{technologies}</DefaultParagraph>
              <LinktToRepo href={gitHubLink}>
                <GitHubIcon></GitHubIcon>
              </LinktToRepo>
              {demo && <ProjectDemo href={demo} >Demo</ProjectDemo>}
            </Project>
          ))}
        </ProjectsContainer>
      </Box>
    </ProjectsSection>
  );
}
