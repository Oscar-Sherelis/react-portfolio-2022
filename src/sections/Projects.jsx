import { StyledSection } from "../components/Section";
import { styled, Box } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Link } from "@mui/material";
import { theme } from "../Theme";
import React from "react";
import {
  DefaultH1,
  DefaultParagraph,
} from "../components/text-elements/CustomTextEl";
import memeGenerator from "../images/meme.png"
import gallery from "../images/gallery.png";
import weatherApp from "../images/weatherapp.png"
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
    },
    {
      name: "Phonenumber share",
      technologies: "Laravel",
      image: phonenumberShare,
      gitHubLink: "https://github.com/Oscar-Sherelis/phonenumber_share",
    },
    {
      name: "PC shop",
      technologies: "Vue, Vuex",
      image: pcShop,
      gitHubLink: "https://github.com/Oscar-Sherelis/vuejs-desktops",
    },
    {
      name: "Meme generator",
      technologies: "JS",
      image: memeGenerator,
      gitHubLink: "https://github.com/Oscar-Sherelis/meme_generator",
    },
    {
      name: "Gallery",
      technologies: "JS",
      image: gallery,
      gitHubLink: "https://github.com/Oscar-Sherelis/gallery",
    },
    {
      name: "File viewer",
      technologies: "PHP",
      image: fileViewer,
      gitHubLink: "https://github.com/Oscar-Sherelis/open_file",
    },
  ];

  const ProjectsSection = styled(StyledSection)({
    height: "unset"
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
    marginRight: "15px"
  });

  const ProjectDemo = styled(Link)({
    fontSize: "16px",
    color: theme.palette.secondary.textMainColor,
    "&:hover": {
      cursor: "pointer"
    }
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
          {projects.map((project) => (
            <Project key={project.name}>
              <ProjectImage imageURL={project.image}></ProjectImage>
              <ProjectName>{project.name}</ProjectName>
              <DefaultParagraph>{project.technologies}</DefaultParagraph>
              <LinktToRepo href={project.gitHubLink}>
                <GitHubIcon></GitHubIcon>
              </LinktToRepo>
              <ProjectDemo>Demo</ProjectDemo>
            </Project>
          ))}
        </ProjectsContainer>
      </Box>
    </ProjectsSection>
  );
}