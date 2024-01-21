import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import logo1 from "/public/logos/fa-brands-1.png";
import logo2 from "/public/logos/fa-brands-2.png";
import logo3 from "/public/logos/fa-brands-3.png";
import logo4 from "/public/logos/fa-brands-4.png";
import logo5 from "/public/logos/fa-brands-5.png";
import logo6 from "/public/logos/fa-brands-6.png";

function Companies() {
  return (
    <Box
      sx={{
        display: { sx: "block", md: "flex" },
        justifyContent: "space-evenly",
        alignItems: "center",
        marginY: "50px",
      }}
    >
      <Box sx={{ height: "100%", my: "24px;" }}>
        <Image
          src={logo1}
          alt="logo"
          style={{ margin: "auto", display: "block" }}
        />
      </Box>
      <Box sx={{ height: "100%", my: "24px;" }}>
        <Image
          src={logo2}
          alt="logo"
          style={{ margin: "auto", display: "block" }}
        />
      </Box>
      <Box sx={{ height: "100%", my: "24px;" }}>
        <Image
          src={logo3}
          alt="logo"
          style={{ margin: "auto", display: "block" }}
        />
      </Box>
      <Box sx={{ height: "100%", my: "24px;" }}>
        <Image
          src={logo4}
          alt="logo"
          style={{ margin: "auto", display: "block" }}
        />
      </Box>
      <Box sx={{ height: "100%", my: "24px;" }}>
        <Image
          src={logo5}
          alt="logo"
          style={{ margin: "auto", display: "block" }}
        />
      </Box>
      <Box sx={{ height: "100%", my: "24px;" }}>
        <Image
          src={logo6}
          alt="logo"
          style={{ margin: "auto", display: "block" }}
        />
      </Box>
    </Box>
  );
}

export default Companies;
