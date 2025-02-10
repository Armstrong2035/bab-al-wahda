import Hero from "./hero/Hero";
import { Box, Divider, Stack } from "@mui/material";
import TechnicalDetails from "./overview/technicalDetails/TechnicalDetails";
export default function Body({ isDesktop }) {
  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      <Box sx={{ mt: 15, ml: 5, mr: 5 }}>
        <Hero isDesktop={isDesktop} />
        <TechnicalDetails isDesktop={isDesktop} />
      </Box>
    </Stack>
  );
}
