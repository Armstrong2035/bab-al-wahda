import { Box, Stack, IconButton } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSwipeable } from "react-swipeable"; // Need to install this package

export default function SmallImageList({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [sliding, setSliding] = useState(false);

  const nextImage = () => {
    setSliding(true);
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setSliding(false), 500); // Match this with transition duration
  };

  const prevImage = () => {
    setSliding(true);
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setSliding(false), 500);
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Box
      sx={{
        position: "relative",
        mt: 10,
        "&:hover .carousel-controls": {
          opacity: 1,
        },
      }}
      {...handlers}
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
        {/* Previous Image (for transition) */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: sliding ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            zIndex: 1,
          }}
        >
          <Image
            src={images[(currentImage - 1 + images.length) % images.length]}
            alt="previous image"
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

        {/* Current Image */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            opacity: 1,
            transition: "opacity 0.5s ease-in-out",
            zIndex: 2,
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
          zIndex: 3,
        }}
      >
        <IconButton
          onClick={prevImage}
          sx={{
            bgcolor: "rgba(255,255,255,0.8)",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.9)",
              transform: "scale(1.1)",
            },
            transition: "transform 0.2s ease-in-out",
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          onClick={nextImage}
          sx={{
            bgcolor: "rgba(255,255,255,0.8)",
            "&:hover": {
              bgcolor: "rgba(255,255,255,0.9)",
              transform: "scale(1.1)",
            },
            transition: "transform 0.2s ease-in-out",
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
          zIndex: 3,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => {
              setSliding(true);
              setCurrentImage(index);
              setTimeout(() => setSliding(false), 500);
            }}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor:
                currentImage === index ? "white" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              transform: currentImage === index ? "scale(1.2)" : "scale(1)",
              "&:hover": {
                bgcolor: "white",
                transform: "scale(1.2)",
              },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
