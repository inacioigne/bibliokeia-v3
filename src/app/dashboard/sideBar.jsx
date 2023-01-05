"use client";
// MUI
import MuiDrawer from "@mui/material/Drawer";
import { IconButton, Divider, Box } from "@mui/material/";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { styled, useTheme } from "@mui/material/styles";

// React Hooks
import { useState } from "react";

const drawerWidth = "240px";

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: "100px",
  //   width: `calc(${theme.spacing(7)} + 1px)`,
  //   [theme.breakpoints.up("sm")]: {
  //     width: `calc(${theme.spacing(8)} + 1px)`,
  //   },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Header = styled("div")(({ theme }) => ({
  backgroundColor: "red",
  width: "100%",
  ...(open ? { marginLeft: drawerWidth } : { marginLeft: "100px" }),
  // ...(!open && {
  //     marginLeft: "100px",
  // } )
  // display: "flex",
  // alignItems: "center",
  // justifyContent: "flex-end",
  // padding: theme.spacing(0, 1),
}));

export default function SideBar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerClose = () => {
    setOpen(!open);
  };
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRightIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      {theme.direction}
    </Drawer>
  );
}
