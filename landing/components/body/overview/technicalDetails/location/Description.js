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
    "14 Mins – Expo 2020",
    "16 Mins – Al Maktoum International Airport",
    "12 Mins – Global Village",
    "18 Mins – Dubai Outlet Mall",
    "19 Mins – DAMAC Mall",
  ];

  return (
    <Stack spacing={10} sx={{ height: "100%" }}>
      <Stack spacing={3}>
        <Typography sx={typography.medium28}>
          DAMAC Riverside puts you in the perfect spot. Close enough to
          everything that matters, yet exclusive enough to be an escape.
        </Typography>

        <List>
          {locations.map((location, index) => (
            <ListItem key={index}>
              <Typography sx={typography.regular16}>{location}</Typography>
            </ListItem>
          ))}
        </List>

        <Typography sx={{ ...typography.medium28, fontSize: "18px" }}>
          Easy access to highways and key destinations means wherever life takes
          you, you’re already on your way. Live close to the city and the river
          at the same time with DAMAC Riverside Views, a wellness-inspired
          residential community.
        </Typography>
      </Stack>

      <Typography sx={typography.regular48}>
        Starting Price: AED 888,000
      </Typography>
    </Stack>
  );
}
