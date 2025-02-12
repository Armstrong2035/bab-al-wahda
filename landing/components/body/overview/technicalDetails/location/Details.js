import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

export default function Details() {
  const tableData = [
    { label: "Unit Types", value: "1 & 2 Bedrooms" },
    { label: "Area Range", value: "798 - 1,331 sq.ft" },
    { label: "Completion", value: "March 2029" },
    { label: "Handover Date", value: "Q2 2029" },
    { label: "Total Units", value: "2,523 units" },
    { label: "Tower Height", value: "40 floors" },
    { label: "Ownership", value: "Freehold" },
    { label: "Payment Plan", value: "60/40" },
    { label: "Maintenance Fee", value: "AED 14 per sq.ft" },
    { label: "Deposit Required", value: "20%" },
    { label: "Construction Status", value: "30% completed" },
  ];

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ backgroundColor: "#1C6658" }}
    >
      <Table>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index} sx={{ borderColor: "#1C6658" }}>
              <TableCell sx={{ color: "white" }}>{row.label}</TableCell>
              <TableCell sx={{ color: "white" }}>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
