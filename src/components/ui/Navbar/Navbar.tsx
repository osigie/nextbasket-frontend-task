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

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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

              <IconButton size="large" aria-label="menu">
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
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button href="/" sx={navBtnStyle}>
                Home
              </Button>
              <Button href="#" sx={navBtnStyle}>
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
              </Button>
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
              <Button sx={rightnavBtnStyle} onClick={handleOpen}>
                <ShoppingCartOutlinedIcon />
                {/* <span> {cart.length > 0 ? cart.length : null}</span> */}3
              </Button>

              <Button sx={rightnavBtnStyle} onClick={handleOpenModalWL}>
                <FavoriteBorderOutlinedIcon />
                {/* <span> {wishlist.length > 0 ? wishlist.length : null}</span> */}
                3
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h2"
              component="h2"
              fontSize={"32px"}
              fontWeight={"700"}
              borderBottom={"1px solid #212121"}
            >
              Shopping Cart
            </Typography>
            {cart?.map((item: any) => (
              <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            ))}

            <Box
              marginTop="24px"
              padding="8px"
              gridTemplateColumns="repeat(12, 1fr)"
              gap={1}
              sx={{
                display: { xs: "block", md: "grid" },
              }}
            >
              <Box gridColumn="span 6">
                <Typography
                  variant="subtitle2"
                  fontWeight={700}
                  color="#252B42"
                  fontSize="16px"
                  marginBottom={"14px"}
                >
                  ORDER SUMMARY
                </Typography>
              </Box>
              <Box gridColumn="span 6" textAlign={"right"}>
                <Typography
                  variant="subtitle2"
                  fontWeight={400}
                  color="#252B42"
                  fontSize="16px"
                  marginBottom={"14px"}
                >
                  SUBTOTAL({getTotal(cart).totalQuantity}):{" "}
                  <strong>${getTotal(cart).totalPrice}</strong>
                </Typography>
              </Box>
            </Box>
          </Box>
        </>
      </Modal>

      <Modal
        open={openModalWL}
        onClose={handleCloseModalWL}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h2"
              component="h2"
              fontSize={"32px"}
              fontWeight={"700"}
              borderBottom={"1px solid #212121"}
            >
              Wishlist
            </Typography>
            {wishlist?.map((item: any) => (
              <WishlistItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
              />
            ))}
          </Box>
        </>
      </Modal> */}
    </>
  );
}

export default Navbar;
