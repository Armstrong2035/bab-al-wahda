import { Box, Stack } from "@mui/material";
import Image from "next/image";

export default function SmallImageList({ images }) {
  return (
    <Stack spacing={3} sx={{ mt: 10 }}>
      {images.map((image) => (
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
            src={image}
            alt="image"
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
      ))}
    </Stack>
  );
}
