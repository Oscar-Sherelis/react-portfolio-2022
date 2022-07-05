// Styles and Styled Elements

import { StyledSection } from "../components/Section";
import { theme } from "../Theme";
import { DefaultH1 } from "../components/text-elements/CustomTextEl";
import { Box, styled } from "@mui/system";
import { IconButton } from "@mui/material";

// Social Media Icons

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Contact() {
  const LinkedIn = styled(LinkedInIcon)({
    color: theme.palette.socialMedia.linkedIn,
  });

  const Twitter = styled(TwitterIcon)({
    color: theme.palette.socialMedia.twitter,
  });
  return (
    <StyledSection id="contact">
      <Box>
        {" "}
        <DefaultH1 component="h2" gutterBottom={true}>
          Contact
        </DefaultH1>
        <IconButton href="https://www.linkedin.com/in/oscar-sherelis">
          <LinkedIn fontSize="large"></LinkedIn>
        </IconButton>
        <IconButton href="https://twitter.com/Oscar_Sherelis">
          <Twitter fontSize="large"></Twitter>
        </IconButton>
        <IconButton href="mailto:oskaras34@gmail.com">
          <MailOutlineIcon fontSize="large"></MailOutlineIcon>
        </IconButton>
      </Box>
    </StyledSection>
  );
}
