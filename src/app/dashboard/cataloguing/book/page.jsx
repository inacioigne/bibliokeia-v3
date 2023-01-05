"use client";
// MUI
import {
  Container,
  Paper,
  Grid,
  Box,
  IconButton,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  Breadcrumbs,
} from "@mui/material/";
import {
  ImportContacts,
  Subject,
  Language,
  Home,
  Person3,
  Class,
} from "@mui/icons-material/";
import TitleIcon from "@mui/icons-material/Title";

import { blue } from "@mui/material/colors";

const menuStyle = {
  borderRadius: "6px",
  m: "0.5rem",
  pl: "0.5rem",
  color: "text.secondary",
  ":hover": {
    backgroundColor: blue[100],
    color: "text.primary",
  },
};

// Next Components
import Link from "next/link";

// React Hooks
import { useState } from "react";

// BiblioKeia Components
import Content from "src/components/bibframe/content";
import Title from "src/components/bibframe/title";
import Contribution from "src/components/bibframe/contribution";


export default function Books() {
  const [visible, setVisible] = useState(0);
  return (
    <Container>
      <Breadcrumbs>
        <Link href="/">
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "0.9rem",
              lineHeight: 1.3,
              ml: "0.5rem",
            }}
          >
            Início
          </Typography>
        </Link>
        <Link href="/dashboard">
          <Typography
            variant="h6"
            sx={{
              fontWeight: 400,
              fontSize: "0.9rem",
              lineHeight: 1.3,
              ml: "0.5rem",
            }}
          >
            Dashboard
          </Typography>
        </Link>
        <Link href="/dashboard/cataloguing">
          <Typography
            variant="h6"
            color="text.primary"
            sx={{
              fontWeight: 400,
              fontSize: "0.9rem",
              lineHeight: 1.3,
              ml: "0.5rem",
            }}
          >
            Catalogação
          </Typography>
        </Link>
        <Typography
          variant="h6"
          color="text.primary"
          sx={{
            fontWeight: 400,
            fontSize: "0.9rem",
            lineHeight: 1.3,
            ml: "0.5rem",
          }}
        >
          Livros
        </Typography>
      </Breadcrumbs>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Obra
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <Typography variant="subtitle2" sx={{ p: "1rem" }}>
              Metadados
            </Typography>
            <MenuList>
              <MenuItem
                sx={
                  visible == 0
                    ? {
                        ...menuStyle,
                        backgroundColor: blue[100],
                        color: "text.primary",
                      }
                    : { ...menuStyle }
                }
                onClick={() => {
                  setVisible(0);
                }}
              >
                <ListItemIcon>
                  <ImportContacts
                    sx={{ ":hover": { color: "text.primary" } }}
                  />
                </ListItemIcon>
                <ListItemText>Tipo</ListItemText>
              </MenuItem>
              <MenuItem
                sx={
                  visible == 1
                    ? {
                        ...menuStyle,
                        backgroundColor: blue[100],
                        color: "text.primary",
                      }
                    : { ...menuStyle }
                }
                onClick={() => {setVisible(1)}}
              >
                <ListItemIcon>
                  <TitleIcon sx={{ ":hover": { color: "text.primary" } }} />
                </ListItemIcon>
                <ListItemText>Título</ListItemText>
              </MenuItem>
              <MenuItem
                sx={
                  visible == 2
                    ? {
                        ...menuStyle,
                        backgroundColor: blue[100],
                        color: "text.primary",
                      }
                    : { ...menuStyle }
                }
                onClick={() => {setVisible(2)}}
              >
                <ListItemIcon>
                  <Person3 sx={{ ":hover": { color: "text.primary" } }} />
                </ListItemIcon>
                <ListItemText>Autor</ListItemText>
              </MenuItem>
              <MenuItem
                sx={
                  visible == 3
                    ? {
                        ...menuStyle,
                        backgroundColor: blue[100],
                        color: "text.primary",
                      }
                    : { ...menuStyle }
                }
              >
                <ListItemIcon>
                  <Subject sx={{ ":hover": { color: "text.primary" } }} />
                </ListItemIcon>
                <ListItemText>Assunto</ListItemText>
              </MenuItem>
              <MenuItem
                sx={
                  visible == 4
                    ? {
                        ...menuStyle,
                        backgroundColor: blue[100],
                        color: "text.primary",
                      }
                    : { ...menuStyle }
                }
              >
                <ListItemIcon>
                  <Language sx={{ ":hover": { color: "text.primary" } }} />
                </ListItemIcon>
                <ListItemText>Idioma</ListItemText>
              </MenuItem>
              <MenuItem
                sx={
                  visible == 5
                    ? {
                        ...menuStyle,
                        backgroundColor: blue[100],
                        color: "text.primary",
                      }
                    : { ...menuStyle }
                }
              >
                <ListItemIcon>
                  <Class sx={{ ":hover": { color: "text.primary" } }} />
                </ListItemIcon>
                <ListItemText>Classificação</ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper>
            {/* Content Type*/}
            {visible === 0 && <Content defaultType="Texto" />}
            {visible === 1 && <Title />}
            {visible === 2 && <Contribution />}
 
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
