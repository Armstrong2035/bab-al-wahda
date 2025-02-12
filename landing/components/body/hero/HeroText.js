import { Typography, Box, Stack } from "@mui/material";
import { mdTypography, typographyStyles } from "@/utils/styles";

export default function HeroText({ isDesktop }) {
  const style = {
    fontFamily: "'Manrope', sans-serif",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "6.5rem", // 104px converted to rem
    lineHeight: "6.75rem", // 108px converted to rem
    color: "#000000", // hex version of rgb(0, 0, 0)
  };

  // console.log(isDesktop);
  // console.log(mdTypography);
  return (
    <Stack>
      <Typography sx={isDesktop ? style : mdTypography.heading48}>
        — where balance
      </Typography>
      <Typography sx={isDesktop ? style : mdTypography.heading48}>
        is a way of living,
      </Typography>
      <Typography sx={isDesktop ? style : mdTypography.heading48}>
        not a hard choice
      </Typography>
    </Stack>
  );
}
