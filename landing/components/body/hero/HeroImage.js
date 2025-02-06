import Image from "next/image";
import { Box } from "@mui/material";
import heroImage from "../../../public/heroImage.jpg";

export default function HeroImage() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Image
        src={heroImage}
        alt="Hero image"
        layout={"responsive"}
        quality={100}
      />
    </Box>
  );
}
