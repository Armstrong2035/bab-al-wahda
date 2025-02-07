import { Stack, Box, Typography } from "@mui/material";

export default function Heading() {
  return (
    <Stack direction={"row"} spacing={5}>
      <Typography> (03)</Typography>
      <Box>
        <Typography>A thoughtful design</Typography>
        <Typography>
          Every residence at DAMAC Riverside is built to fit the way you live.
        </Typography>
      </Box>
    </Stack>
  );
}
