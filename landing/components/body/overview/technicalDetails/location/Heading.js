import { Typography, Stack, Box } from "@mui/material";

export default function Heading() {
  return (
    <Stack direction={"row"} spacing={4}>
      <Typography>(01)</Typography>

      <Box>
        <Typography>Location</Typography>
        <Typography>Connected to the City yet inside to Nature.</Typography>
      </Box>
    </Stack>
  );
}
