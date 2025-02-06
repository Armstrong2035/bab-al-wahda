import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Stack,
  Box,
  Grid2,
} from "@mui/material";
import Details from "./Details";
import Description from "./Description";
import Heading from "./Heading";

export default function Location() {
  return (
    <Box sx={{ mt: 10 }}>
      <Heading />

      <Grid2 container spacing={10} sx={{ mt: 5 }}>
        <Grid2 item size={{ sm: 12, md: 12, lg: 8 }}>
          <Description />
        </Grid2>

        <Grid2 item size={{ sm: 12, md: 12, lg: 4 }}>
          <Details />
        </Grid2>
      </Grid2>
    </Box>
  );
}
