"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { ProductsResponseT } from "../../../../typs";
import ProductCard from "../ProductCard/ProductCard";
import { ProductCardLoader } from "../ProductCard/ProductCardLoader";

function DynamicProducts({
  products,
  loadMore,
  isLoading,
  isFetching,
  isError,
  handleLoadMoreProduct,
}: {
  isLoading?: boolean;
  isFetching?: boolean;
  products?: ProductsResponseT;
  loadMore?: boolean;
  isError: FetchBaseQueryError | SerializedError | undefined;
  handleLoadMoreProduct?: () => void;
}) {
  if (isError)
    return (
      <Box display="flex" justifyContent="center" height="100px" padding="40px">
        <Typography>An error occured!</Typography>
      </Box>
    );
  return (
    <Box sx={{ mt: "90px", mb: "24px", mx: "56px" }}>
      <Box
        component="ul"
        sx={{
          display: { xs: "block", md: "grid" },
          mt: "80px",
          listStyle: "none",
        }}
        gridTemplateColumns="repeat(10, 1fr)"
        gap={1}
      >
        {products?.products?.map((product) => (
          <Box
            component="li"
            gridColumn="span 2"
            sx={{ height: "100%", margin: "8px" }}
            key={product.id}
          >
            <ProductCard product={product} isLoading={isLoading} />
          </Box>
        ))}

        {isFetching
          ? Array.from({ length: 10 }).map((item, index) => {
              return (
                <Box
                  component="li"
                  gridColumn="span 2"
                  sx={{ height: "100%", margin: "8px" }}
                  key={index}
                >
                  <ProductCardLoader />
                </Box>
              );
            })
          : null}
      </Box>

      {products?.products?.length !== products?.total && loadMore ? (
        <Button
          variant="outlined"
          sx={{
            margin: "auto",
            display: "block",
            mt: "40px",
          }}
          onClick={handleLoadMoreProduct}
          disabled={isLoading || isFetching}
        >
          LOAD MORE PRODUCTS
        </Button>
      ) : null}
    </Box>
  );
}

export default DynamicProducts;
