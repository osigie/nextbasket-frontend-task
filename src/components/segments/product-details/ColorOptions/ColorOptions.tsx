import { Box } from "@mui/material";

export const ColorOptions = ({ index }: { index: number }) => {
  const bg = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"];
  return (
    <Box
      sx={{
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        cursor: "pointer",
        backgroundColor: bg[index],
      }}
    ></Box>
  );
};