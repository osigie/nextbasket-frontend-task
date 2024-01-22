import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function BottomBanner() {
  return (
    <Box
      sx={{
        backgroundImage: `url("/bottomBanner.png")`,
        minHeight: { xs: "712px", md: "620px" },
        display: "flex",
        backgroundSize: "cover",
        backgroundPosition: { xs: "55% bottom", md: "50% bottom" },
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "38%" },
          margin: "auto",
          display: "block",
        }}
      >
        <Typography
          variant="h6"
          textAlign="center"
          color="primary"
          marginBottom={"30px"}
        >
          Designing Better Experience
        </Typography>
        <Typography
          variant="h2"
          textAlign="center"
          color="custom.main"
          marginBottom={"30px"}
        >
          Problems trying to resolve the conflict between
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          color="custom.light"
          marginBottom={"30px"}
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </Typography>
        <Typography
          variant="h3"
          textAlign="center"
          color="secondary.main"
          marginBottom={"30px"}
        >
          $16.48
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary",
            boxShadow: "none",
            margin: "auto",
            display: "block",
          }}
        >
          ADD YOUR CALL TO ACTION
        </Button>
      </Box>
    </Box>
  );
}

export default BottomBanner;
