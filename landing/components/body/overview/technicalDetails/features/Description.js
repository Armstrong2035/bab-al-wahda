import { Box, Typography, Stack, Grid, Card, CardContent } from "@mui/material";

export default function FeaturesList() {
  const features = {
    "INSIDE YOUR HOME": [
      {
        title: "Premium Finishes",
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
    ],
    "THE COMMUNITY": [
      {
        title: "Exclusive Gated Entry",
        description: "A private haven for residents only.",
      },
      {
        title: "Concierge & 24/7 Security",
        description: "Peace of mind, so you can focus on what matters most.",
      },
      {
        title: "Infinity Pool & Fitness Club",
        description: "Designed for relaxation and wellness.",
      },
    ],
  };

  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 4 } }}>
      {Object.entries(features).map(([category, items]) => (
        <Box key={category} sx={{ mb: 8 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              color: "#005244",
              fontWeight: 500,
            }}
          >
            {category}
          </Typography>

          <Grid container spacing={3}>
            {items.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    border: "1px solid #eaeaea",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: 2,
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#1C6658" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body1">{item.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
