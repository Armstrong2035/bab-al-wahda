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

  const apartmentData = [
    { label: "Unit Types", value: "1 & 2 Bedrooms" },
    { label: "Area Range", value: "690 - 1,331 sq.ft" },

    { label: "Handover Date", value: "Q1 2029" },
    { label: "Ownership", value: "Freehold" },
    { label: "Payment Plan", value: "70/30" },
    { label: "Deposit Required", value: "20%" },
  ];

  const townhouseData = [
    { label: "Unit Types", value: "4 & 5 Bedrooms" },
    { label: "Area Range", value: "2,460 - 3,200 sq.ft" },

    { label: "Handover Date", value: "Q3 2028" },
    { label: "Ownership", value: "Freehold" },
    { label: "Payment Plan", value: "70/30" },
    { label: "Deposit Required", value: "20%" },
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
        <Tab label="Apartments" />
        <Tab label="Townhouses" />
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
                {apartmentData.map((row, index) => (
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
                {townhouseData.map((row, index) => (
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
