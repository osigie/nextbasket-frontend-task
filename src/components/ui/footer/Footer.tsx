import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Icons } from "../../Icons";
import { Grid } from "@mui/material";
import { FooterListItem } from "./FooterListItem";
import { FooterListHeader } from "./FooterListHeader";

function Footer() {
  return (
    <>
      <Box
        sx={{
          minHeight: "120px",
          display: "flex",
          backgroundColor: "cBackground.main",
          justifyContent: { xs: "center", md: "space-between" },
          flexFlow: { xs: "column", md: "row" },
          alignItems: { xs: "start", md: "center" },
          paddingX: { xs: "45px", md: "195px" },
          borderBottom: "1px solid white",
          marginBottom: "50px",
        }}
      >
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="left"
          color="custom.main"
          fontSize="24px"
        >
          Bandage
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton
            sx={{ paddingX: "0" }}
            color="primary"
            size="small"
            aria-label="add to shopping cart"
          >
            <Icons.facebook />
          </IconButton>
          <IconButton
            size="small"
            sx={{ paddingX: "0" }}
            color="primary"
            aria-label="add to shopping cart"
          >
            <Icons.instagram />
          </IconButton>
          <IconButton
            size="small"
            sx={{ paddingX: "0" }}
            color="primary"
            aria-label="add to shopping cart"
          >
            <Icons.twitter />
          </IconButton>
        </Box>
      </Box>

      <Grid container sx={{ paddingX: { xs: "45px", md: "195px" } }}>
        <Grid xs={12} sm={4} md={2} sx={{ height: "100%" }}>
          <FooterListHeader title="Company Info" />
          <List dense={false}>
            <FooterListItem item="About Us" />
            <FooterListItem item=" Carrier" />
            <FooterListItem item=" We are hiring" />
            <FooterListItem item="Blog" />
          </List>
        </Grid>
        <Grid sx={{ height: "100%" }} xs={12} sm={4} md={2}>
          <FooterListHeader title="Legal" />
          <List dense={false}>
            <FooterListItem item="About Us" />
            <FooterListItem item=" Carrier" />
            <FooterListItem item=" We are hiring" />
            <FooterListItem item="Blog" />
          </List>
        </Grid>
        <Grid sx={{ height: "100%" }} xs={12} sm={4} md={2}>
          <FooterListHeader title="Features" />
          <List dense={false}>
            <FooterListItem item=" Business Marketing" />
            <FooterListItem item=" User Analytic" />
            <FooterListItem item=" Live Chat" />
            <FooterListItem item=" Unlimited Support" />
          </List>
        </Grid>
        <Grid sx={{ height: "100%" }} xs={12} sm={4} md={2}>
          <FooterListHeader title="Resources" />
          <List dense={false}>
            <FooterListItem item="IOS & Android" />
            <FooterListItem item="  Watch a Demo" />
            <FooterListItem item=" Customers" />
            <FooterListItem item=" API" />
          </List>
        </Grid>
        <Grid sx={{ height: "100%" }} xs={12} sm={4} md={4}>
          <Typography
            variant="subtitle2"
            fontWeight={700}
            textAlign="left"
            color="custom.main"
            fontSize="16px"
          >
            Get In Touch
          </Typography>

          <Box sx={{ display: "flex", marginTop: "20px" }}>
            <TextField
              variant="outlined"
              placeholder="Your Email"
              sx={{ width: "204px" }}
            />
            <Button
              variant="contained"
              disableElevation
              sx={{ width: "117px" }}
            >
              Subscribe
            </Button>
          </Box>
          <Typography
            variant="subtitle2"
            fontWeight={400}
            textAlign="left"
            color="custom.light"
            fontSize="12px"
            marginTop={"8px"}
          >
            Lore imp sum dolor Amit
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          marginTop: "52px",
          minHeight: "74px",
          display: "flex",
          backgroundColor: "cBackground.main",
          justifyContent: { xs: "center", md: "space-between" },
          flexFlow: { xs: "column", md: "row" },
          alignItems: { xs: "start", md: "center" },
          paddingX: { xs: "45px", md: "195px" },
        }}
      >
        <Typography
          variant="subtitle2"
          fontWeight={700}
          color="custom.light"
          fontSize="14px"
          sx={{
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Made With Love By Finland All Right Reserved.
        </Typography>
      </Box>
    </>
  );
}

export default Footer;