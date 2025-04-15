import { Box, Container } from "@mui/material";
import Heading from "./Heading";
import Description from "./Description";
import HeroImage from "@/components/body/hero/HeroImage";
import interior from "../../../../../public/features/interior.png";
import FeaturesList from "./Description";

export default function Features() {
  return (
    <Container>
      <Box sx={{ mb: 10 }}>
        <Heading />
      </Box>
      {/* <Description /> */}

      {/* <HeroImage heroImage={interior} /> */}
      <FeaturesList />
    </Container>
  );
}
