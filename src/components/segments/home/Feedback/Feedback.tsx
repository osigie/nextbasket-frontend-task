import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import user1 from "/public/user1.png";
import Image from "next/image";

import Rating from "@mui/material/Rating";
function Feedback() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h3" textAlign="center" color="custom.main">
        What they say about us
      </Typography>

      <Image
        src={user1}
        alt="Featured Post image 1"
        style={{
          margin: "auto",
          display: "block",
          marginTop: "58px",
          marginBottom: "20px",
        }}
      />
      <Box sx={{ marginBottom: "20px" }}>
        <Rating name="read-only" value={4} readOnly />
      </Box>
      <Typography
        variant="h6"
        textAlign="center"
        color="custom.light"
        sx={{ maxWidth: { xs: "288px", md: "100%" }, margin: { xs: "auto" } }}
      >
        Slate helps you see how many more days you need to work to reach your
        financial goal.
      </Typography>
      <Typography
        variant="h6"
        textAlign="center"
        color="primary"
        marginTop={"20px"}
      >
        Regina Miles
      </Typography>
      <Typography variant="h5" textAlign="center" color="custom.main">
        Designer
      </Typography>
    </Box>
  );
}

export default Feedback;
