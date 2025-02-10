import { Box, Container } from "@mui/material";
import Heading from "./Heading";
import Renderings from "./Renderings";
import SubText from "./SubText";

const floorPlanImages = [
  "/floorplan/four-bedroom.png",
  "/floorplan/five-bedroom.png",
];

export default function FloorPlan() {
  return (
    <Container>
      <Heading />
      <Renderings images={floorPlanImages} />
      {/* <SubText /> */}
    </Container>
  );
}
