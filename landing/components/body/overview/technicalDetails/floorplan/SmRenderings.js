import { Card, Stack, Button, CardContent } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function RenderingsMobile({ images }) {
  const [showFirst, setShowFirst] = useState(true);

  return (
    <Card sx={{ mt: 5 }}>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} sx={{ p: 2 }}>
          <Button
            variant={showFirst ? "contained" : "outlined"}
            onClick={() => setShowFirst(true)}
            sx={{
              backgroundColor: showFirst ? "#005244" : "transparent",
              color: showFirst ? "white" : "#005244",
              borderColor: "#005244",
            }}
          >
            4 BED
          </Button>
          <Button
            variant={!showFirst ? "contained" : "outlined"}
            onClick={() => setShowFirst(false)}
            sx={{
              backgroundColor: !showFirst ? "#005244" : "transparent",
              color: !showFirst ? "white" : "#005244",
              borderColor: "#005244",
            }}
          >
            5 BED
          </Button>
        </Stack>

        <CardContent>
          <div
            style={{
              height: "80vh",
              width: "100%",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "100vh", // Ensures image is fully visible when rotated
                height: "100vw",
                transform: "translate(-50%, -50%) rotate(90deg)",
                transformOrigin: "center",
              }}
            >
              <Image
                src={showFirst ? images[0] : images[1]}
                alt="Floor plan"
                layout="fill"
                objectFit="contain" // <-- Change to contain so nothing gets cut off!
              />
            </div>
          </div>
        </CardContent>
      </Stack>
    </Card>
  );
}
