"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Modal from "@mui/material/Modal";
import { Title } from "@mui/icons-material";
import { BasketIcon, HamMenuIcon, SearchIcon } from "@/components/Icons";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { toggleDrawerOpen, toggleMenuActive } from "@/redux/store/menuSlice";
import Link from "next/link";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", md: "720" },
  height: { xs: "80%" },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

function Navbar() {
  const path = usePathname();

  const [open, setOpen] = useState(false);
  const [openModalWL, setOpenModalWL] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenModalWL = () => setOpenModalWL(true);
  const handleCloseModalWL = () => setOpenModalWL(false);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.app.cart);
  const { wishlist } = useAppSelector((state) => state.app.wishlist);

  const navBtnStyle = {
    color: "#737373",
    fontSize: "12px",
    fontWeight: "bold",
    minHeight: 0,
    minWidth: 0,
    padding: "6px",
    display: "flex",
    alignItems: "center",
  };

  const rightnavBtnStyle = {
    display: "flex",
    alignItems: "center",
    color: "#23A6F0",
    fontSize: "12px",
    fontWeight: "bold",
    minHeight: 0,
    minWidth: 0,
    margin: 0,
    padding: "4px",
  };

  return (
    <>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            color="custom.main"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            Bandage
          </Typography>

          <Box
            sx={{
              display: { xs: "flex", sm: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h3"
              noWrap
              component="a"
              href="/"
              color="custom.main"
              sx={{
                mr: 2,
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              Bandage
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "24px" }}>
              {path === "/" ? (
                <>
                  <IconButton size="large" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  <IconButton size="large" aria-label="cart">
                    <BasketIcon />
                  </IconButton>
                </>
              ) : null}

              <IconButton
                size="large"
                aria-label="menu"
                onClick={() => dispatch(toggleMenuActive())}
              >
                <HamMenuIcon />
              </IconButton>
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              marginLeft: "40px",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  gap: "21px",
                  alignItems: "center",
                },
              }}
            >
              <Link href="/">
                <Typography variant="h6" color="custom.light">
                  Home
                </Typography>
              </Link>
              <Link href="#">
                <Typography
                  variant="h6"
                  color="custom.light"
                  sx={{ display: "flex", alignItems: "center", gap: "9px" }}
                >
                  Shop <KeyboardArrowDownOutlinedIcon />
                </Typography>
              </Link>
              <Link href="#">
                <Typography variant="h6" color="custom.light">
                  About
                </Typography>
              </Link>
              <Link href="#">
                <Typography variant="h6" color="custom.light">
                  Blog
                </Typography>
              </Link>
              <Link href="#">
                <Typography variant="h6" color="custom.light">
                  Contact
                </Typography>
              </Link>
              <Link href="#">
                <Typography variant="h6" color="custom.light">
                  Pages
                </Typography>
              </Link>
              {/* <Button href="#" sx={navBtnStyle}>
                Shop <KeyboardArrowDownOutlinedIcon />
              </Button>
              <Button href="#" sx={navBtnStyle}>
                About
              </Button>
              <Button href="#" sx={navBtnStyle}>
                Blog
              </Button>
              <Button href="#" sx={navBtnStyle}>
                Contact
              </Button>
              <Button href="#" sx={navBtnStyle}>
                Pages
              </Button> */}
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Button sx={rightnavBtnStyle}>
                <PersonOutlineOutlinedIcon />
                Login / Register
              </Button>
              <Button sx={rightnavBtnStyle}>
                <SearchOutlinedIcon />
              </Button>
              <Button
                sx={rightnavBtnStyle}
                onClick={() => dispatch(toggleDrawerOpen("cart"))}
              >
                <ShoppingCartOutlinedIcon />
                <span> {cart.length > 0 ? cart.length : null}</span>
              </Button>

              <Button
                sx={rightnavBtnStyle}
                onClick={() => dispatch(toggleDrawerOpen("wishlist"))}
              >
                <FavoriteBorderOutlinedIcon />
                <span> {wishlist.length > 0 ? wishlist.length : null}</span>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </>
  );
}

export default Navbar;
