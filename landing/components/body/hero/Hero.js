import HeroText from "./HeroText";
import { Box, Container, Grid2 } from "@mui/material";
import SubText1 from "./SubText1";
import HeroImage from "./HeroImage";
import heroImage from "../../../public/heroImage.jpg";

export default function Hero({ isDesktop }) {
  return (
    <Grid2
      container
      spacing={isDesktop ? 10 : 3}
      alignItems={"center"}
      justifyContent={"center"}
      // sx={{ border: "1px solid red" }}
    >
      <Grid2 item size={{ sm: 12, md: 12, lg: 8 }}>
        <HeroText isDesktop={isDesktop} />
      </Grid2>

      <Grid2 item size={{ sm: 12, md: 12, lg: 4 }}>
        <SubText1 isDesktop={isDesktop} />
      </Grid2>

      <Grid2 item size={{ sm: 12, md: 12, lg: 12 }}>
        <HeroImage heroImage={heroImage} isDesktop={isDesktop} />
      </Grid2>
    </Grid2>
  );
}
