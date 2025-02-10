import typography from "@/utils/styles";
import { Box, Typography, Stack } from "@mui/material";

export default function Description() {
  const features = [
    {
      title: "Premium Finish",
      description:
        "From natural stone countertops to oak wood flooring, every touchpoint is designed for sophistication.",
    },
    {
      title: "Private Balconies",
      description:
        "Enjoy your morning coffee or unwind in the evening with expansive river views.",
    },
    {
      title: "Spa-Like Bathrooms",
      description:
        "Rain showers, deep soaking tubs, and mood lighting create a truly comfortable experience.",
    },
    {
      title: "Smart Home System",
      description:
        "Set the perfect ambiance with automated climate control, lighting, and security.",
    },
  ];
  return (
    <Stack direction={"row"} justifyContent={"space-between"} sx={{}}>
      {features.map((feature, index) => (
        <div key={index}>
          <Typography sx={typography.regular16}>{feature.title}</Typography>
          {/* <Typography>{feature.description}</Typography> */}
        </div>
      ))}
    </Stack>
  );
}
