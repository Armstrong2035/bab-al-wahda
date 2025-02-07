import { Box, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";

export default function ImagesLayout({ images }) {
  //console.log(images);
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <ImageList variant="masonry" cols={2} gap={30}>
        {images.map((image, index) => {
          // First image takes full width
          const isFirstImage = index === 0;
          const imageHeight = isFirstImage ? 400 : 300;

          return (
            <ImageListItem
              key={index}
              sx={{
                position: "relative",
                overflow: "hidden",
                // First image spans both columns
                gridColumn: isFirstImage ? "span 2" : "span 1",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: imageHeight,
                  width: "100%",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  sizes={isFirstImage ? "100vw" : "50vw"}
                />
              </div>
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
}
