import { Box, Stack, IconButton } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function SmallImageList({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Box
      sx={{
        position: "relative",
        mt: 10,
        "&:hover .carousel-controls": {
          opacity: 1,
        },
      }}
    >
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
          src={images[currentImage]}
          alt={`image ${currentImage + 1}`}
          width={1920}
          height={1080}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          quality={100}
        />
      </Box>

      {/* Navigation Arrows */}
      <Box
        className="carousel-controls"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 2,
          opacity: 0,
          transition: "opacity 0.3s",
        }}
      >
        <IconButton
          onClick={prevImage}
          sx={{
            bgcolor: "rgba(255,255,255,0.8)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={nextImage}
          sx={{
            bgcolor: "rgba(255,255,255,0.8)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* Dots Navigation */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentImage(index)}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor:
                currentImage === index ? "white" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
