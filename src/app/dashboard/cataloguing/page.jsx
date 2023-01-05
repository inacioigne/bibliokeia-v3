"use client";

import {
  Container,
  Box,
  Breadcrumbs,
  Typography,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { AutoStories, LibraryBooks, CollectionsBookmark, Article } from "@mui/icons-material/";




// Next Components
import Link from "next/link";

// BiblioKeia Components
import CardTemplate from "src/components/cards/template";

export default function Cataloguing() {
  return (
    <Container maxWidth="xl">
      <Box mt={"1rem"}>
        <Breadcrumbs>
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
        </Breadcrumbs>
      </Box>
      <Typography variant="h3" gutterBottom>
        Bibframe
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-around"}}>
      <CardTemplate name={"Livros"} Icon={AutoStories}/>
      <CardTemplate name={"Teses"} Icon={LibraryBooks} />
      <CardTemplate name={"Períodicos"} Icon={CollectionsBookmark} />
      <CardTemplate name={"Artigos"} Icon={Article} />
      

      </Box>
      
    </Container>
  );
}
