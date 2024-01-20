import React from "react";
import Box from "@mui/material/Box";
import { homeSideWidgetImageData } from "../../../../../lib";
import { SingleWidget } from "./SingleWidget";
function SideWidget() {
  return (
    <Box
      sx={{ display: "grid", marginTop: "67px" }}
      gridTemplateColumns="repeat(12, 1fr)"
      gap={1}
    >
      {homeSideWidgetImageData.map((item, i) => {
        return <SingleWidget image={item} key={i} index={i} />;
      })}
    </Box>
  );
}

export default SideWidget;
