import Image from "next/image";
import { Box } from "@mui/material";

export default function HeroImage({ heroImage }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "80vh", sm: "100vh" },
        width: "100%",
        borderRadius: { xs: "10px", sm: "10px" },
        overflow: "hidden",
      }}
    >
      <Image
        src={heroImage}
        alt="Hero image"
        width={1920} // Replace with actual width
        height={1080} // Replace with actual height
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
        quality={100}
      />
    </Box>
  );
}
