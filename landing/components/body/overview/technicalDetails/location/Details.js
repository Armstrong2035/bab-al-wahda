import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

export default function Details() {
  const overviewContent = {
    description: [
      "Nestled in Dubai's next residential hub, DAMAC Riverside Views offers an unprecedented living experience. Drawing inspiration from the world's most iconic riverside cities - from London's Thames to Paris's Seine - this development creates a harmonious blend of urban sophistication and natural serenity.",
      "Each residence is thoughtfully designed to maximize views of the stunning waterfront, while providing easy access to Dubai's key locations. With premium finishes and contemporary architecture, these homes represent the pinnacle of riverside luxury living.",
    ],
    // technicalDetails: {
    //   startingPrice: "AED 888,000",
    //   unitTypes: "1 & 2 Bedrooms",
    //   areaRange: "798 - 1,331 sq.ft",
    //   completion: "March 2029",
    //   handoverDate: "Q2 2029",
    //   totalUnits: "2,523 units",
    //   towerHeight: "40 floors",
    //   ownership: "Freehold",
    //   paymentPlan: "60/40",
    //   maintenanceFee: "AED 14 per sq.ft",
    //   depositRequired: "20%",
    //   constructionStatus: "30% completed",
    //   interiorFinishes: {
    //     flooring: "Italian Marble",
    //     kitchen: "European-fitted Kitchen",
    //     appliances: "Siemens or equivalent",
    //     ceilings: "2.9m height",
    //     windows: "Floor to ceiling",
    //     balcony: "Glass-railed terraces"
    //   },
    //   sustainability: {
    //     rating: "LEED Gold certified",
    //     features: [
    //       "Solar water heating",
    //       "Smart home automation",
    //       "Energy-efficient glazing",
    //       "Electric car charging stations"
    //     ]
    //   },
    //   parking: {
    //     type: "Underground",
    //     spotsPerUnit: "1-2 depending on unit type",
    //     visitorSpaces: "200+"
    //   },
    //   security: {
    //     access: "Smart card access",
    //     surveillance: "24/7 CCTV",
    //     concierge: "24-hour concierge service"
    //   }
  };

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Unit Types</TableCell>
            <TableCell>1 & 2 Bedrooms</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Area Range</TableCell>
            <TableCell>798 - 1,331 sq.ft</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Completion</TableCell>
            <TableCell>March 2029</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Handover Date</TableCell>
            <TableCell>Q2 2029</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Units</TableCell>
            <TableCell>2,523 units</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tower Height</TableCell>
            <TableCell>40 floors</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ownership</TableCell>
            <TableCell>Freehold</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Payment Plan</TableCell>
            <TableCell>60/40</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Maintenance Fee</TableCell>
            <TableCell>AED 14 per sq.ft</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Deposit Required</TableCell>
            <TableCell>20%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Construction Status</TableCell>
            <TableCell>30% completed</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
