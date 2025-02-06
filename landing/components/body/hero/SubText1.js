import { Typography, Stack, Box, Button } from "@mui/material";

export default function SubText1() {
  const style1 = {
    heading: {
      fontFamily: "'Manrope', sans-serif",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "28px",
      lineHeight: "37px",
      color: "rgb(0, 0, 0)",
    },
    body: {
      fontFamily: "'Manrope', sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "19px",
      color: "#777777",
    },
  };

  return (
    <Stack spacing={18}>
      <Box>
        <Typography sx={style1.heading}> Damac Riverside Views</Typography>
        <Typography sx={style1.body}>
          1 & 2 bedroom riverside apartments
        </Typography>
      </Box>

      <Box>
        <Typography sx={{ ...style1.body, color: "#525252" }}>
          Discover the charm of this single-family home nestled in Silver Lake.
          With its inviting atmosphere and vibrant location, it's the perfect
          place to call home.
        </Typography>

        <Button variant="contained" sx={{ backgroundColor: "black", mt: 3 }}>
          Explore Now
        </Button>
      </Box>
    </Stack>
  );
}
