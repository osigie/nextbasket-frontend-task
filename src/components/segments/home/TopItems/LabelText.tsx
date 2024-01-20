"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const LabelText = ({ variant = "sm" }: { variant?: "sm" | "md" }) => {
  return (
    <Box position="absolute" top="24px" left="24px">
      <Typography
        variant="subtitle2"
        fontWeight={700}
        textAlign="left"
        color="#2DC071"
      >
        5 items
      </Typography>
      <Typography variant={variant === "sm" ? "h3" : "h2"} color="custom.main">
        Furniture
      </Typography>

      <Typography
        variant="subtitle2"
        className="color-main"
        fontWeight={700}
        textAlign="left"
      >
        Read More
      </Typography>
    </Box>
  );
};
