import HeroText from "./HeroText";
import { Box, Container, Grid2 } from "@mui/material";
import SubText1 from "./SubText1";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <Grid2 container spacing={10}>
      <Grid2 item size={{ sm: 12, md: 12, lg: 8 }}>
        <HeroText />
      </Grid2>

      <Grid2 item size={{ sm: 12, md: 12, lg: 4 }}>
        <SubText1 />
      </Grid2>

      <Grid2 item size={{ sm: 12, md: 12, lg: 12 }}>
        <HeroImage />
      </Grid2>
    </Grid2>
  );
}
