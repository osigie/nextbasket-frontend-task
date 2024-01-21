"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TopProduct from "@/components/segments/home/TopItems/TopProduct";
import Services from "@/components/segments/home/Services/Services";
import Feedback from "@/components/segments/home/Feedback/Feedback";
import SideWidget from "@/components/segments/home/SideWidget/SideWidget";
import BottomBanner from "@/components/segments/home/BottomBanner/BottomBanner";
import Footer from "@/components/ui/footer/Footer";
import FeaturedPost from "@/components/segments/home/FeaturedPost/FeaturedPost";
import DynamicProducts from "@/components/shared/DynamicProducts/DynamicProducts";
import { Button } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection: "column",
          gap: "30px",
          pt: "83px",
          mb: "98px",
          alignItems: "center",
        }}
      >
        <Typography
          component="a"
          href="/"
          variant="caption"
          color="custom.light"
        >
          Home
        </Typography>
        <Typography
          component="a"
          href="/"
          variant="caption"
          color="custom.light"
        >
          Product
        </Typography>
        <Typography
          component="a"
          href="/"
          variant="caption"
          color="custom.light"
        >
          Pricing
        </Typography>
        <Typography
          component="a"
          href="/"
          variant="caption"
          color="custom.light"
        >
          Contact
        </Typography>
      </Box>

      <Box sx={{ padding: { xs: "8px 14px", md: "80px 147px" } }}>
        <TopProduct />
        <Typography variant="h4" textAlign="center" color="custom.light">
          Featured Products
        </Typography>
        <Typography
          variant="h3"
          sx={{ my: "10px" }}
          textAlign="center"
          color="custom.main"
        >
          BEST SELLERS PRODUCTS
        </Typography>
        <Typography variant="subtitle1" textAlign="center" color="custom.light">
          Problems trying to resolve the conflict between
        </Typography>
        <DynamicProducts />

        <Services />
        <FeaturedPost />
        <Box
          sx={{
            display: { sm: "block", md: "flex" },
            mt: "80px",
            mb: "80px",
            padding: { md: "48px" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: { sm: "100%", md: "40%" },
              margin: "auto",
            }}
          >
            <Feedback />
          </Box>
          <Box
            sx={{
              height: "100%",
              margin: "auto",
              width: { sm: "100%", md: "40%" },
            }}
          >
            <SideWidget />
          </Box>
        </Box>
      </Box>
      <BottomBanner />
      <Footer />
    </>
  );
}
