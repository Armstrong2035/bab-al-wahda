"use client";
import Hero from "./hero/Hero";
import { Box, Divider, Stack, useMediaQuery, useTheme } from "@mui/material"; // Added useTheme here
import TechnicalDetails from "./overview/technicalDetails/TechnicalDetails";
// Remove the separate useTheme import

export default function Body({ images, heroImage }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      <Box sx={{ mt: 10, ml: 5, mr: 5 }}>
        <Hero isDesktop={isDesktop} heroImage={heroImage} />
        <TechnicalDetails isDesktop={isDesktop} images={images} />
      </Box>
    </Stack>
  );
}
