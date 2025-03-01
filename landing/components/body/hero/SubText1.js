import { mdTypography } from "@/utils/styles";
import { Typography, Stack, Box, Button } from "@mui/material";

export default function SubText1({ isDesktop }) {
  const scrollToForm = () => {
    const form = document.getElementById("riverside-contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };
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
          Bab Al Wahda event halls
        </Typography>
        <Typography sx={style1.body}>1200 and 1800 sqft halls</Typography>
      </Box>

      <Box>
        <Typography sx={isDesktop ? style1.body : mdTypography.body16Gray}>
          Experience elegance and excellence at Bab Al Wahda, the premier
          destination for unforgettable events. From grand celebrations to
          corporate gatherings, our state-of-the-art venue offers stunning
          décor, seamless service, and world-class amenities.
        </Typography>

        <Button
          variant="contained"
          onClick={scrollToForm}
          sx={{ backgroundColor: "#005244", mt: 3 }}
        >
          Call us
        </Button>
      </Box>
    </Stack>
  );
}
