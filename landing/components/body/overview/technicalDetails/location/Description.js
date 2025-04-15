import typography from "@/utils/styles";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Stack,
} from "@mui/material";

export default function Description() {
  const locations = [
    "7 Mins – Al Mulla Plaza",
    "12 Mins – Stadium Metro Station",
    "20 minutes - Dubai Airports",
  ];

  return (
    <Stack spacing={10} sx={{ height: "100%" }}>
      <Stack spacing={3}>
        <Typography sx={typography.medium28}>
          Experience the perfect blend of accessibility and elegance at Bab Al
          Wahda, where every occasion becomes extraordinary.
        </Typography>

        <List>
          {locations.map((location, index) => (
            <ListItem key={index}>
              <Typography sx={typography.regular16}>{location}</Typography>
            </ListItem>
          ))}
        </List>

        <Typography sx={{ ...typography.medium28, fontSize: "18px" }}>
          Centrally positioned for convenience, yet exclusive enough to provide
          a refined and private setting. With easy access to major roads and key
          destinations, hosting your event has never been more seamless.
        </Typography>
      </Stack>

      <Box>
        <Typography sx={typography.regular48}>Contact us:</Typography>
        <Typography sx={typography.regular48}>+971 50 726 5334</Typography>
      </Box>
    </Stack>
  );
}
