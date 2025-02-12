import { Box, Divider, Stack } from "@mui/material";
import Location from "./location/Location";
import Gallery from "./gallery/Gallery";
import FloorPlan from "./floorplan/FloorPlan";
import Features from "./features/Features";
export default function TechnicalDetails({ isDesktop, images }) {
  return (
    <Box>
      <Location />
      <Divider sx={{ mt: 20, mb: 20 }} />
      <Gallery isDesktop={isDesktop} images={images} />
      <Divider sx={{ mt: 20, mb: 20 }} />
      <FloorPlan isDesktop={isDesktop} />
      <Divider sx={{ mt: 20, mb: 20 }} />
      <Features />
    </Box>
  );
}
