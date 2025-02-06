import { Stack, Typography, Box } from "@mui/material";

export default function Heading() {
  return (
    <Stack direction={"row"} spacing={5}>
      <Typography> (02)</Typography>

      <Box>
        <Typography>A First Look at Your Future Community</Typography>

        <Typography>
          Imagine stepping into a space where every detail is designed for
          beauty and comfort. Take a look at what’s waiting for you at DAMAC
          Riverside.
        </Typography>
      </Box>
    </Stack>
  );
}
