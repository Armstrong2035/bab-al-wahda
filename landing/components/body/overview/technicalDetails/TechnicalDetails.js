import { Box, Stack } from "@mui/material";
import Location from "./location/Location";
import Gallery from "./gallery/Gallery";
import FloorPlan from "./floorplan/FloorPlan";
export default function TechnicalDetails() {
  return (
    <Box>
      <Location />
      <Gallery />
      <FloorPlan />
    </Box>
  );
}
