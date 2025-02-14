"use client";

import {
  Box,
  TextField,
  MenuItem,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    unitPreference: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      id="riverside-contact-form"
      sx={{
        bgcolor: "#1C6658",
        p: 4,
        borderRadius: 2,
        textAlign: "center", // Center all text
      }}
    >
      <Stack spacing={1} sx={{ mb: 4, color: "white", alignItems: "center" }}>
        {" "}
        {/* Center stack items */}
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          Book your unit
        </Typography>
        <Typography variant="body1">
          Fill this form. Your specialist is waiting for you
        </Typography>
      </Stack>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: 400, // Made narrower for better centered appearance
          mx: "auto",
        }}
      >
        <Stack spacing={3}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            sx={{
              bgcolor: "white",
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            sx={{
              bgcolor: "white",
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />

          <TextField
            label="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            fullWidth
            sx={{
              bgcolor: "white",
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
              },
            }}
          />

          <TextField
            select
            label="Unit Preference"
            name="unitPreference"
            value={formData.unitPreference}
            onChange={handleChange}
            required
            fullWidth
            sx={{
              bgcolor: "white",
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
              },
            }}
          >
            <MenuItem value="4-bed">4 Bedroom</MenuItem>
            <MenuItem value="5-bed">5 Bedroom</MenuItem>
          </TextField>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "white",
              color: "#1C6658",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.9)",
              },
              py: 1.5,
              fontSize: "1.1rem",
            }}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
