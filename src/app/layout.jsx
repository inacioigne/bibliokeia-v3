"use client";

import "./globals.css";
import { Montserrat } from "@next/font/google";

// Providers BiblioKeia
import { ProgressProvider } from "src/providers/progress";
import { BfProvider } from "src/providers/bibframe";
import Providers from "src/app/providers";
import { AlertProvider } from "src/providers/alerts";

const montserrat = Montserrat({ subsets: ["latin"] });

// import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, Button, LinearProgress } from "@mui/material";

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={montserrat.className}>
      <head />
      <ProgressProvider>
        <BfProvider>
          <AlertProvider>
            <body>
              <Providers />

              {children}
            </body>
          </AlertProvider>
        </BfProvider>
      </ProgressProvider>
    </html>
  );
}
