import { Card, CardContent, Stack, Button } from "@mui/material";
import { useState } from "react"; // Remove React since it's not needed with modern Next.js
import Image from "next/image";

const BEDROOM_TYPES = [
  { id: "1bed", label: "1 Bedroom", imageIndex: 2 },
  { id: "2bed", label: "2 Bedrooms", imageIndex: 3 },
  { id: "4bed", label: "4 Bedrooms", imageIndex: 0 },
  { id: "5bed", label: "5 Bedrooms", imageIndex: 1 },
];

const buttonStyles = (isActive) => ({
  backgroundColor: isActive ? "#005244" : "transparent",
  color: isActive ? "white" : "#005244",
  borderColor: "#005244",
  "&:hover": {
    backgroundColor: isActive ? "#005244" : "transparent",
    opacity: 0.9,
  },
});

export default function Renderings({ images }) {
  const [activeType, setActiveType] = useState("4bed");

  // Get the current image based on active type
  const currentImage =
    images[
      BEDROOM_TYPES.find((type) => type.id === activeType)?.imageIndex || 0
    ];

  return (
    <Card sx={{ mt: 5 }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ p: 2 }}>
        {BEDROOM_TYPES.map((type) => (
          <Button
            key={type.id}
            variant={activeType === type.id ? "contained" : "outlined"}
            onClick={() => setActiveType(type.id)}
            sx={buttonStyles(activeType === type.id)}
          >
            {type.label}
          </Button>
        ))}
      </Stack>
      <CardContent>
        <div
          style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}
        >
          <Image
            src={currentImage}
            alt={`${activeType} layout`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            style={{ objectFit: "contain" }}
            priority={activeType === "4bed"} // Prioritize loading of default image
          />
        </div>
      </CardContent>
    </Card>
  );
}
