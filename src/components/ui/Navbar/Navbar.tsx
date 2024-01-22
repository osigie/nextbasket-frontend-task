"use client";
import { BasketIcon, HamMenuIcon, SearchIcon } from "@/components/Icons";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { toggleDrawerOpen, toggleMenuActive } from "@/redux/store/menuSlice";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const path = usePathname();

  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.app.cart);
  const { wishlist } = useAppSelector((state) => state.app.wishlist);

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
          <Link href="/">
            <Typography
              noWrap
              component="a"
              color="custom.main"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: "0.3rem",
                textDecoration: "none",
              }}
            >
              Bandage
            </Typography>
          </Link>

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
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                  dispatch(toggleMenuActive());
                }}
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
                {cart.length}
              </Button>

              <Button
                sx={rightnavBtnStyle}
                onClick={() => dispatch(toggleDrawerOpen("wishlist"))}
              >
                <FavoriteBorderOutlinedIcon />
                {wishlist.length}
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </>
  );
}

export default Navbar;
