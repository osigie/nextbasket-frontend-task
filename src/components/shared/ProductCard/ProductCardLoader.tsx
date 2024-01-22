import { Box, Skeleton } from "@mui/material";
import React from "react";

export const ProductCardLoader = () => {
  return (
    <Box>
      <Skeleton height={238} variant="rectangular" />
      <Box display="flex" flexDirection={"column"} alignItems="center">
        <Skeleton width={75} variant="text" />
        <Skeleton width={100} variant="text" />
        <Skeleton width={40} variant="text" />
      </Box>
    </Box>
  );
};
