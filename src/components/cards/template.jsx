"use client";

import {
  Typography,
  Card,
  CardContent,
  IconButton,
  Box
} from "@mui/material";

// Next Components
import Link from "next/link";

export default function CardTemplate({name, Icon}) {
    //console.log(Icon)
    return (
        <Card
        sx={{
          width: 230,
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Template
          </Typography>
          <Typography variant="h5" component="div" sx={{ textAlign: "center" }}>
            {name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
          <Link href="/dashboard/cataloguing/book">
          <IconButton color="primary">
        
              <Icon sx={{ fontSize: 60 }} />
            </IconButton>

          </Link>
            
          </Box>
        </CardContent>
      </Card>
    )
}