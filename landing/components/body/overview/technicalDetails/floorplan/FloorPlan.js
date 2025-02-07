import { Box } from "@mui/material";
import Heading from "./Heading";
import Renderings from "./Renderings";
import SubText from "./SubText";

const floorPlanImages = [
  "/floorplan/four-bedroom.png",
  "/floorplan/five-bedroom.png",
];

export default function FloorPlan() {
  return (
    <Box sx={{ mt: 10 }}>
      <Heading />
      <Renderings images={floorPlanImages} />
      <SubText />
    </Box>
  );
}
