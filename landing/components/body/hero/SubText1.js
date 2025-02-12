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
      spacing={isDesktop ? 10 : 3}
      justifyContent={"center"}
      // sx={{ border: "1px solid red" }}
    >
      <Box>
        <Typography sx={isDesktop ? style1.heading : mdTypography.heading32}>
          {" "}
          Damac Riverside Views
        </Typography>
        <Typography sx={style1.body}>
          4 & 5 bedroom riverside townhouses
        </Typography>
      </Box>

      <Box>
        <Typography sx={isDesktop ? style1.body : mdTypography.body16Gray}>
          Welcome to Dubai's foremost wellness-inspired residential community,
          Providing you with Stunning waterfront views, and world-class
          amenities. This is more than a home.
        </Typography>

        <Button variant="contained" sx={{ backgroundColor: "#005244", mt: 3 }}>
          Register Your Interest
        </Button>
      </Box>
    </Stack>
  );
}
