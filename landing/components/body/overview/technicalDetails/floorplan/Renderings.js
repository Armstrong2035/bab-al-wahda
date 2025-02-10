import { Card, CardContent, Stack, Button } from "@mui/material";
import { React, useState } from "react";
import Image from "next/image";

export default function Renderings({ images }) {
  const [showFirst, setShowFirst] = useState(true);

  const myName = "Armstrong";

  return (
    <Card sx={{ mt: 5 }}>
      <Stack direction="row" spacing={2} sx={{ p: 2 }}>
        <Button
          variant={showFirst ? "contained" : "outlined"}
          onClick={() => setShowFirst(true)}
        >
          4 bedrooms
        </Button>
        <Button
          variant={!showFirst ? "contained" : "outlined"}
          onClick={() => setShowFirst(false)}
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
