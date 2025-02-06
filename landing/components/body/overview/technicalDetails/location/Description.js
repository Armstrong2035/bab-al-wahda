import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";

export default function Description() {
  const locations = [
    "14 Mins – Expo 2020",
    "16 Mins – Al Maktoum International Airport",
    "12 Mins – Global Village",
    "18 Mins – Dubai Outlet Mall",
    "19 Mins – DAMAC Mall",
  ];

  return (
    <Box sx={{ height: "100%" }}>
      <Typography>
        DAMAC Riverside puts you in the perfect spot—close to everything that
        matters, yet far enough to feel like an escape.
      </Typography>

      <List>
        {locations.map((location, index) => (
          <ListItem key={index}>
            <ListItemText>{location}</ListItemText>
          </ListItem>
        ))}
      </List>

      <Typography>
        Easy access to highways and key destinations means wherever life takes
        you, you’re already on your way.
      </Typography>

      <Typography sx={{ alignSelf: "flex-end" }}>
        Starting Price: AED 880,000
      </Typography>
    </Box>
  );
}
