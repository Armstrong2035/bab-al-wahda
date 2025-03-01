import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import { useState } from "react";

export default function Details() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const hall7 = [
    { label: "Hall 7", value: "" },
    { label: "Capacity", value: "250 - 300 guests" },
    {
      label: "Technology",
      value: "10 TVs, a large LED screen, premium speakers, and RGB lighting",
    },
    { label: "Sound System", value: "12 microphones & digital mixer" },
    { label: "Sound Mixer", value: "Presonus StudioLive 32s" },
    { label: "Deposit Required", value: "50%" },
  ];

  const hall8 = [
    { label: "Hall 8", value: "" },
    { label: "Capacity", value: "100 - 150 guests" },
    {
      label: "Technology",
      value: "2 projectors, high-quality speakers, and microphones",
    },
    { label: "Sound System", value: "6 microphones & digital mixer" },
    { label: "Sound Mixer", value: "Presonus StudioLive Series III 32s" },
    { label: "Deposit Required", value: "50%" },
  ];

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          mb: 2,
          "& .MuiTab-root": {
            color: "#1C6658",
            "&.Mui-selected": {
              color: "#005244",
            },
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#005244",
          },
        }}
      >
        <Tab label="Hall 7" />
        <Tab label="Hall 8" />
      </Tabs>

      <div role="tabpanel" hidden={value !== 0}>
        {value === 0 && (
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{ backgroundColor: "#1C6658" }}
          >
            <Table>
              <TableBody>
                {hall7.map((row, index) => (
                  <TableRow key={index} sx={{ borderColor: "#1C6658" }}>
                    <TableCell sx={{ color: "white" }}>{row.label}</TableCell>
                    <TableCell sx={{ color: "white" }}>{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>

      <div role="tabpanel" hidden={value !== 1}>
        {value === 1 && (
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{ backgroundColor: "#1C6658" }}
          >
            <Table>
              <TableBody>
                {hall8.map((row, index) => (
                  <TableRow key={index} sx={{ borderColor: "#1C6658" }}>
                    <TableCell sx={{ color: "white" }}>{row.label}</TableCell>
                    <TableCell sx={{ color: "white" }}>{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </Box>
  );
}
