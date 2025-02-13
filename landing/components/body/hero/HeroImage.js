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
        alt="Damac riverside interior"
        width={1920}
        height={1080}
        priority={true}
        quality={85}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
}
