import { Box, Container } from "@mui/material";
import Heading from "./Heading";
import Renderings from "./Renderings";
import SubText from "./SubText";
import SmRenderings from "./SmRenderings";

const floorPlanImages = [
  "/floorplan/four-bedroom.png",
  "/floorplan/five-bedroom.png",
];

export default function FloorPlan({ isDesktop }) {
  return (
    <Container>
      <Heading />

      {isDesktop ? (
        <Renderings images={floorPlanImages} />
      ) : (
        <SmRenderings images={floorPlanImages} />
      )}

      {/* <SubText /> */}
    </Container>
  );
}
