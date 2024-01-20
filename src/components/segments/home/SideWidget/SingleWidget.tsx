import React from "react";
import Box from "@mui/material/Box";
import Image, { StaticImageData } from "next/image";

export const SingleWidget = ({
  image,
  index,
}: {
  image: StaticImageData;
  index: number;
}) => {
  return (
    <Box gridColumn="span 4" sx={{ height: "100%", margin: "auto" }}>
      <Image
        src={image}
        alt={"side widget " + index}
        style={{ maxWidth: "100%" }}
      />
    </Box>
  );
};
