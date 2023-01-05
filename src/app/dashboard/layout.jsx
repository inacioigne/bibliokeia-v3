"use client";
// MUI
import {
  AppBar,
  Divider,
  Box,
  Toolbar,
  IconButton,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  LinearProgress,
} from "@mui/material/";
import MuiDrawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import {
  FormatIndentIncrease,
  FormatIndentDecrease,
  LocalLibrary,
  DashboardCustomize,
  Agriculture,
  Home,
} from "@mui/icons-material/";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { grey, blue } from "@mui/material/colors";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

// Next Components
import Link from "next/link";

// Providers BiblioKeia
import { useProgress } from "src/providers/progress";

const drawerWidth = 260;

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
  width: "60px",
  // width: `calc(${theme.spacing(7)} + 1px)`,
  // [theme.breakpoints.up('sm')]: {
  //   width: `calc(${theme.spacing(8)} + 1px)`,
  // },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const theme = createTheme({
  typography: {
    fontFamily: [
      "__Montserrat_258d1f",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const transWidthLeaving = theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  });

  const transMarginLeaving = theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  });

  const transWidthEntering = theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  });

  const transMarginEntering = theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  });

  const styleOpenHeader = {
    backgroundColor: "background.default",
    boxShadow: "none",
    color: "inherit",
    width: "calc(100% - 260px)",
    transition: `${transWidthEntering}, ${transMarginEntering}`,
  };

  const styleCloseHeader = {
    backgroundColor: "background.default",
    boxShadow: "none",
    color: "inherit",
    width: "calc(100% - 60px)",
    transition: `${transWidthLeaving}, ${transMarginLeaving}`,
  };

  const { initProgress } = useProgress();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        {/* NAVBAR */}
        <AppBar
          position="fixed"
          sx={open ? { ...styleOpenHeader } : { ...styleCloseHeader }}
        >
          <Toolbar
            sx={{
              position: "relative",
              p: "8px 16px",
              minHeight: "60px",
            }}
          >
            <IconButton
              sx={{
                borderRadius: "4px",
                color: grey[800],
                backgroundColor: grey[100],
              }}
              onClick={() => setOpen(!open)}
            >
              {open ? <FormatIndentDecrease /> : <FormatIndentIncrease />}
            </IconButton>
          </Toolbar>
          {/* </Header> */}
        </AppBar>
        {/* SIDEBAR */}
        <Box component="nav" sx={{ zIndex: 1200 }}>
          <Drawer variant="permanent" open={open}>
            <Box
              sx={{
                minHeight: "60px",
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                justifyContent: "flex-start",
                pl: "16px",
                fontWeight: 600,
              }}
            >
              <LocalLibrary color="primary" sx={{ fontSize: 35 }} />
              <Typography
                variant="h6"
                gutterBottom
                sx={{ mb: 0, mt: "0.5rem", fontWeight: 600 }}
              >
                BiblioKeia
              </Typography>
            </Box>
            {/* <Divider /> */}
            <MenuList>
              <Link href="/dashboard">
                <MenuItem
                  sx={{
                    borderRadius: "6px",
                    mx: "0.5rem",
                    pl: "0.5rem",
                    ":hover": { backgroundColor: blue[100] },
                  }}
                  onClick={initProgress}
                >
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 400,
                        fontSize: "0.9rem",
                        lineHeight: 1.3,
                        ml: "0.5rem",
                      }}
                    >
                      Inicio
                    </Typography>
                  </ListItemText>
                </MenuItem>
              </Link>
              <Link href="/dashboard/cataloguing">
                <MenuItem
                  sx={{
                    borderRadius: "6px",
                    mx: "0.5rem",
                    pl: "0.5rem",
                    ":hover": { backgroundColor: blue[100] },
                  }}
                  onClick={initProgress}
                >
                  <ListItemIcon>
                    <DashboardCustomize />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 400,
                        fontSize: "0.9rem",
                        lineHeight: 1.3,
                        ml: "0.5rem",
                      }}
                    >
                      Catalogação
                    </Typography>
                  </ListItemText>
                </MenuItem>
              </Link>
            </MenuList>
            <Typography variant="caption" display="block" gutterBottom>
              Widgets
            </Typography>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <DashboardCustomize />
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Agriculture />
                </ListItemIcon>
                <ListItemText>Component</ListItemText>
              </MenuItem>
            </MenuList>
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ width: "calc(100% - 260px)", flexGrow: 1, mt: "60px" }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
