"use client";
import BottomBanner from "@/components/segments/home/BottomBanner/BottomBanner";
import FeaturedPost from "@/components/segments/home/FeaturedPost/FeaturedPost";
import Feedback from "@/components/segments/home/Feedback/Feedback";
import Services from "@/components/segments/home/Services/Services";
import SideWidget from "@/components/segments/home/SideWidget/SideWidget";
import TopProduct from "@/components/segments/home/TopProduct/TopProduct";
import DynamicProducts from "@/components/shared/DynamicProducts/DynamicProducts";
import Footer from "@/components/ui/footer/Footer";
import { useAppSelector } from "@/redux/app/hooks";
import { useGetProductsQuery } from "@/redux/services/product.service";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";

export default function HomePage() {
  const { isMenuActive } = useAppSelector((state) => state.menu);

  const [take, setTake] = React.useState(1);

  const { data, currentData, error, isLoading, refetch, isFetching } =
    useGetProductsQuery(
      {
        limit: 10,
        take,
      },
      {}
    );

  return (
    <>
      {isMenuActive ? (
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
          <Link href="/">
            <Typography variant="caption" color="custom.light">
              Home
            </Typography>
          </Link>

          <Typography variant="caption" color="custom.light">
            Product
          </Typography>
          <Typography variant="caption" color="custom.light">
            Pricing
          </Typography>
          <Typography variant="caption" color="custom.light">
            Contact
          </Typography>
        </Box>
      ) : null}

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
        <DynamicProducts
          isError={error}
          products={data}
          isLoading={isLoading}
          loadMore={true}
          isFetching={isFetching}
          handleLoadMoreProduct={() => setTake((prev) => prev + 1)}
        />

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
