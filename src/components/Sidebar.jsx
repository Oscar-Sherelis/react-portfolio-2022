import { Box, styled } from "@mui/system";
import { theme } from "../Theme";
import { Home, AccountCircle, Work, Chat } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, Link } from "@mui/material";
import { HexToRGBA } from "../functions/HexToRGBA";

export default function Sidebar({ linkColor, linkBorderOpacity }) {
  const SideBar = styled(Box)({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    minHeight: "100vh",
    maxHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    position: "fixed",

    [theme.breakpoints.down("sm")]: {
      width: "40%",
    },

    [theme.breakpoints.up("lg")]: {
      maxWidth: "300px",
    },
  });

  const SideBarContentWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomListItem = styled(ListItem)({
    borderBottom: "1px solid",
    borderColor: HexToRGBA(linkColor, linkBorderOpacity),
    "&:not(:last-child)": {
      marginBottom: "10px",
    },

    "&:hover": {
      cursor: "pointer",
      borderColor: HexToRGBA(linkColor, 1),
      transition: "1s",
    },
  });

  const LinkIcon = styled(ListItemIcon)({
    color: linkColor,
    minWidth: "40px",

    [theme.breakpoints.down("sm")]: {
      minWidth: "30px",
    },
  });

  const CustomLink = styled(Link)({
    color: linkColor,
    textDecoration: "none",
  });

  const menuItems = [
    {
      text: "Home",
      icon: <Home />,
      path: "#home",
    },

    {
      text: "About",
      icon: <AccountCircle />,
      path: "#about",
    },

    {
      text: "Projects",
      icon: <Work />,
      path: "#projects",
    },

    {
      text: "Contact",
      icon: <Chat />,
      path: "#contact",
    },
  ];

  return (
    <SideBar>
      <SideBarContentWrapper>
        {/* List of links */}

        <List>
          {menuItems.map((item) => (
            // Link

            <CustomListItem key={item.text}>
              <LinkIcon>{item.icon}</LinkIcon>
              <CustomLink href={item.path}>{item.text}</CustomLink>
            </CustomListItem>
          ))}
        </List>
      </SideBarContentWrapper>
    </SideBar>
  );
}
