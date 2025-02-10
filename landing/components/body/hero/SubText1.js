import { mdTypography } from "@/utils/styles";
import { Typography, Stack, Box, Button } from "@mui/material";

export default function SubText1({ isDesktop }) {
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
      fontSize: "16px",
      lineHeight: "22px",
      color: "#525252",
    },
  };

  return (
    <Stack
      spacing={isDesktop ? 18 : 3}
      justifyContent={"center"}
      // sx={{ border: "1px solid red" }}
    >
      <Box>
        <Typography sx={isDesktop ? style1.heading : mdTypography.heading32}>
          {" "}
          Damac Riverside Views
        </Typography>
        <Typography sx={style1.body}>4 & 5 bedroom riverside villas</Typography>
      </Box>

      <Box>
        <Typography sx={isDesktop ? style1.body : mdTypography.body16Gray}>
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
