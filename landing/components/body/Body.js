import Hero from "./hero/Hero";
import { Box } from "@mui/material";
import TechnicalDetails from "./overview/technicalDetails/TechnicalDetails";
export default function Body() {
  return (
    <Box>
      <Box sx={{ mt: 25, ml: 10, mr: 10 }}>
        <Hero />
        <TechnicalDetails />
      </Box>
    </Box>
  );
}
