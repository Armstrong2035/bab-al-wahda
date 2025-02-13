import { Box, Grid, Typography, Paper } from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import TheatersIcon from "@mui/icons-material/Theaters";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import SpaIcon from "@mui/icons-material/Spa";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ExtensionIcon from "@mui/icons-material/Extension";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";

export default function FeaturesList() {
  const amenities = [
    {
      icon: <HomeWorkIcon sx={{ fontSize: 40 }} />,
      title: "CLUBHOUSE & RETAIL",
    },
    {
      icon: <BeachAccessIcon sx={{ fontSize: 40 }} />,
      title: "MALIBU COVE",
    },
    {
      icon: <TheaterComedyIcon sx={{ fontSize: 40 }} />,
      title: "AMPHITHEATRE / LAWN",
    },
    {
      icon: <ChildCareIcon sx={{ fontSize: 40 }} />,
      title: "KIDZ ADVENTURE LAND",
    },
    {
      icon: <TheatersIcon sx={{ fontSize: 40 }} />,
      title: "FLOATING CINEMA",
    },
    {
      icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
      title: "HYDROPONIC FARM",
    },
    {
      icon: <SportsEsportsIcon sx={{ fontSize: 40 }} />,
      title: "GAMES ZONE",
    },
    {
      icon: <FitnessCenterIcon sx={{ fontSize: 40 }} />,
      title: "WALL CLIMBING",
    },
    {
      icon: <SportsMartialArtsIcon sx={{ fontSize: 40 }} />,
      title: "CALISTHENICS STATIONS",
    },
    {
      icon: <OutdoorGrillIcon sx={{ fontSize: 40 }} />,
      title: "LIVE COOKING CLASSES/BBQ",
    },
    {
      icon: <SpaIcon sx={{ fontSize: 40 }} />,
      title: "ESSENTIAL OILS LAKE",
    },
    {
      icon: <RestaurantIcon sx={{ fontSize: 40 }} />,
      title: "PORTOFINO RESTAURANT",
    },
    {
      icon: <MusicNoteIcon sx={{ fontSize: 40 }} />,
      title: "FLOATING OPERA",
    },
    {
      icon: <ExtensionIcon sx={{ fontSize: 40 }} />,
      title: "OPAL CHESS HAVEN",
    },
    {
      icon: <DinnerDiningIcon sx={{ fontSize: 40 }} />,
      title: "ISLAND RESTAURANT",
    },
  ];

  return (
    <Box sx={{ py: 8, px: 4 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 6,
          color: "#005244",
          fontWeight: 500,
        }}
      >
        EXCLUSIVE AMENITIES
      </Typography>

      <Grid container spacing={4}>
        {amenities.map((amenity, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
                backgroundColor: "transparent",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  color: "#1C6658",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                {amenity.icon}
              </Box>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 500,
                  lineHeight: 1.3,
                }}
              >
                {amenity.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
