import { Box, Paper } from "@mui/material";

const ClickUpForm = () => {
  return (
    <Box
      id="riverside-contact-form"
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        bgcolor: "#FCFFF3",
        p: 2,
        borderRadius: "8px",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3,
          width: "90%",
          maxWidth: 800,
          borderRadius: "8px",
        }}
      >
        <iframe
          className="clickup-embed clickup-dynamic-height"
          src="https://forms.clickup.com/90181080343/f/2kzkc58q-458/QL136BW1M5WV395XYT"
          width="100%"
          height="600px"
          style={{
            background: "transparent",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />
        <script
          async
          src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"
        ></script>
      </Paper>
    </Box>
  );
};

export default ClickUpForm;
