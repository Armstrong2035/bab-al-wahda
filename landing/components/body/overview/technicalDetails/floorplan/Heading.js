import { Stack, Box, Typography } from "@mui/material";
import typography from "@/utils/styles";

export default function Heading() {
  return (
    <Stack direction={"row"} spacing={5} alignItems={"center"}>
      <Typography sx={typography.medium16}> (03)</Typography>
      <Stack>
        <Typography>Floor Plans</Typography>
        <Typography sx={typography.regular28}>
          Every residence at DAMAC Riverside is built to enrich your life.
        </Typography>
      </Stack>
    </Stack>
  );
}
