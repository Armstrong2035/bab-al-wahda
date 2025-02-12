import { Card, CardContent, Stack, Button } from "@mui/material";
import { React, useState } from "react";
import Image from "next/image";

export default function Renderings({ images }) {
  const [showFirst, setShowFirst] = useState(true);

  return (
    <Card sx={{ mt: 5 }}>
      <Stack direction="row" spacing={2} sx={{ p: 2 }}>
        <Button
          variant={showFirst ? "contained" : "outlined"}
          onClick={() => setShowFirst(true)}
          sx={{
            backgroundColor: showFirst ? "#005244" : "transparent",
            color: showFirst ? "white" : "#005244",
            borderColor: "#005244",
            "&:hover": {
              backgroundColor: showFirst ? "#005244" : "transparent",
              opacity: 0.9,
            },
          }}
        >
          4 bedrooms
        </Button>
        <Button
          variant={!showFirst ? "contained" : "outlined"}
          onClick={() => setShowFirst(false)}
          sx={{
            backgroundColor: !showFirst ? "#005244" : "transparent",
            color: !showFirst ? "white" : "#005244",
            borderColor: "#005244",
            "&:hover": {
              backgroundColor: !showFirst ? "#005244" : "transparent",
              opacity: 0.9,
            },
          }}
        >
          5 bedrooms
        </Button>
      </Stack>
      <CardContent>
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          <Image
            src={showFirst ? images[0] : images[1]}
            alt={`${showFirst ? "4" : "5"} bedroom layout`}
            layout={"responsive"}
            width={100}
            height={100}
          />
        </div>
      </CardContent>
    </Card>
  );
}
