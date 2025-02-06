import { Typography, Box } from "@mui/material";
import { typographyStyles } from "@/utils/styles";

export default function HeroText() {
  const style = {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "6.5rem", // 104px converted to rem
    lineHeight: "6.75rem", // 108px converted to rem
    color: "#000000", // hex version of rgb(0, 0, 0)
  };
  return (
    <Box>
      <Typography sx={style}>— Dream Single</Typography>
      <Typography sx={style}>Family Houses in</Typography>
      <Typography sx={style}>Riverside views</Typography>
    </Box>
  );
}
