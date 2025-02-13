import { Card, CardContent, Stack, Button } from "@mui/material";
import { React, useState } from "react";
import Image from "next/image";

export default function Renderings({ images }) {
  const [activeType, setActiveType] = useState("4bed"); // Changed to handle multiple types

  return (
    <Card sx={{ mt: 5 }}>
      <Stack direction="row" spacing={2} sx={{ p: 2 }}>
        <Button
          variant={activeType === "1bed" ? "contained" : "outlined"}
          onClick={() => setActiveType("1bed")}
          sx={{
            backgroundColor: activeType === "1bed" ? "#005244" : "transparent",
            color: activeType === "1bed" ? "white" : "#005244",
            borderColor: "#005244",
            "&:hover": {
              backgroundColor:
                activeType === "1bed" ? "#005244" : "transparent",
              opacity: 0.9,
            },
          }}
        >
          1 Bedroom
        </Button>
        <Button
          variant={activeType === "2bed" ? "contained" : "outlined"}
          onClick={() => setActiveType("2bed")}
          sx={{
            backgroundColor: activeType === "2bed" ? "#005244" : "transparent",
            color: activeType === "2bed" ? "white" : "#005244",
            borderColor: "#005244",
            "&:hover": {
              backgroundColor:
                activeType === "2bed" ? "#005244" : "transparent",
              opacity: 0.9,
            },
          }}
        >
          2 Bedrooms
        </Button>
        <Button
          variant={activeType === "4bed" ? "contained" : "outlined"}
          onClick={() => setActiveType("4bed")}
          sx={{
            backgroundColor: activeType === "4bed" ? "#005244" : "transparent",
            color: activeType === "4bed" ? "white" : "#005244",
            borderColor: "#005244",
            "&:hover": {
              backgroundColor:
                activeType === "4bed" ? "#005244" : "transparent",
              opacity: 0.9,
            },
          }}
        >
          4 Bedrooms
        </Button>
        <Button
          variant={activeType === "5bed" ? "contained" : "outlined"}
          onClick={() => setActiveType("5bed")}
          sx={{
            backgroundColor: activeType === "5bed" ? "#005244" : "transparent",
            color: activeType === "5bed" ? "white" : "#005244",
            borderColor: "#005244",
            "&:hover": {
              backgroundColor:
                activeType === "5bed" ? "#005244" : "transparent",
              opacity: 0.9,
            },
          }}
        >
          5 Bedrooms
        </Button>
      </Stack>
      <CardContent>
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          <Image
            src={
              activeType === "1bed"
                ? "https://i.postimg.cc/g0sLyhWN/Marine-3-1-BR-Type-B2-Type-C1-Type-C2.png"
                : activeType === "2bed"
                ? "https://i.postimg.cc/GpdssQZ4/Marine-3-2-BR-Type-A1-Type-A2.png"
                : activeType === "4bed"
                ? images[0]
                : images[1]
            }
            alt={`${activeType} layout`}
            layout={"responsive"}
            width={100}
            height={100}
          />
        </div>
      </CardContent>
    </Card>
  );
}
