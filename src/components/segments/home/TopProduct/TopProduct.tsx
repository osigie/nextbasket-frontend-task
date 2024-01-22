"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import funiture1 from "/public/funiture/funiture1.jpg";
import funiture2 from "/public/funiture/funiture2.jpg";
import funiture3 from "/public/funiture/funiture3.jpg";
import funiture4 from "/public/funiture/funiture4.jpg";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { LabelText } from "./LabelText";

const Card = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  boxShadow: "none",
}));

const TopProduct = () => {
  return (
    <Box
      sx={{ display: { xs: "block", md: "grid" }, mb: "80px" }}
      gridTemplateColumns="repeat(10, 1fr)"
      gap={1}
    >
      <Box gridColumn="span 4" sx={{ height: "100%" }}>
        <Card sx={{ position: "relative" }}>
          <Image
            src={funiture1}
            alt="Some text"
            placeholder="blur"
            style={{ width: "100%", height: "auto" }}
          />
          <LabelText variant="md" />
        </Card>
      </Box>
      <Box gridColumn="span 6">
        <Box sx={{ width: 1 }}>
          <Box
            gridTemplateColumns="repeat(12, 1fr)"
            gap={1}
            sx={{ display: { xs: "block", md: "grid" } }}
          >
            <Box gridColumn="span 12">
              <Card sx={{ position: "relative" }}>
                <Image
                  src={funiture2}
                  alt="Some text"
                  placeholder="blur"
                  style={{ width: "100%", height: "auto" }}
                />

                <LabelText />
              </Card>
            </Box>
            <Box gridColumn="span 6">
              <Card sx={{ position: "relative" }}>
                <Image
                  src={funiture3}
                  alt="Some text"
                  placeholder="blur"
                  style={{ width: "100%", height: "auto" }}
                />

                <LabelText />
              </Card>
            </Box>
            <Box gridColumn="span 6">
              <Card sx={{ position: "relative" }}>
                <Image
                  src={funiture4}
                  placeholder="blur"
                  alt="Some text"
                  style={{ width: "100%", height: "auto" }}
                />
                <LabelText />
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopProduct;
