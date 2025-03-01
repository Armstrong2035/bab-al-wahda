import { Box, Grid, Typography, Paper } from "@mui/material";

import {
  Business as BusinessIcon,
  Monitor as ScreenshotMonitorIcon,
  WbIncandescent as WbIncandescentIcon,
  Mic as MicExternalOnIcon,
  QueueMusic as LibraryMusicIcon,
  Groups as GroupsIcon,
  Videocam as VideoProjectorIcon,
  SurroundSound as SurroundSoundIcon,
  GraphicEq as MixerIcon,
  Payment as PaymentsIcon,
} from "@mui/icons-material";

export default function FeaturesList() {
  const amenities = [
    {
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      title: "SPACIOUS VENUE",
    },
    {
      icon: <ScreenshotMonitorIcon sx={{ fontSize: 40 }} />,
      title: "IMMERSIVE VISUALS",
    },
    {
      icon: <WbIncandescentIcon sx={{ fontSize: 40 }} />,
      title: "DYNAMIC LIGHTING",
    },
    {
      icon: <MicExternalOnIcon sx={{ fontSize: 40 }} />,
      title: "PREMIUM SOUND",
    },
    {
      icon: <LibraryMusicIcon sx={{ fontSize: 40 }} />,
      title: "PROFESSIONAL MIXING",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: "IDEAL FOR GATHERINGS",
    },
    {
      icon: <VideoProjectorIcon sx={{ fontSize: 40 }} />,
      title: "HIGH-END PROJECTORS",
    },
    {
      icon: <SurroundSoundIcon sx={{ fontSize: 40 }} />,
      title: "HIGH-QUALITY SOUND",
    },
    {
      icon: <MixerIcon sx={{ fontSize: 40 }} />,
      title: "EXPERT SOUND MIXING",
    },
    {
      icon: <PaymentsIcon sx={{ fontSize: 40 }} />,
      title: "DEPOSIT REQUIRED",
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
