"use client";
import { ColorOptions } from "@/components/segments/product-details/ColorOptions/ColorOptions";
import Companies from "@/components/segments/product-details/Companies/Companies";
import { Swipper } from "@/components/segments/product-details/Swipper/Swipper";
import DynamicProducts from "@/components/shared/DynamicProducts/DynamicProducts";
import Footer from "@/components/ui/footer/Footer";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {
  useGetProductQuery,
  useGetProductsQuery,
} from "@/redux/services/product.service";
import { addToCart } from "@/redux/store/cartSlice";
import { toggleDrawerOpen } from "@/redux/store/menuSlice";
import { showSnackBar } from "@/redux/store/snackBarSlice";
import { addToWishlist } from "@/redux/store/wishlistSlice";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Grid, Skeleton } from "@mui/material";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import productBanner from "/public/product/productBanner.png";
import { ProductsResponseT } from "../../../../typs";

function ProductDetail({ params }: { params: { id: string } }) {
  const dispatch = useAppDispatch();
  const { isMenuActive } = useAppSelector((state) => state.menu);
  const { cart } = useAppSelector((state) => state.app.cart);
  const { wishlist } = useAppSelector((state) => state.app.wishlist);
  const { data, error, isLoading } = useGetProductQuery(params.id);
  const { data: products } = useGetProductsQuery({
    limit: 10,
    take: 1,
  });

  const formatedProducts = {
    ...products,
    products: products?.products.slice(0, 8),
  };

  const breadcrumb = [
    <Link href={`/`} key="1">
      <Typography color="custom.main">Home</Typography>
    </Link>,
    <Typography key="2" color="custom.light">
      Shop
    </Typography>,
  ];
  return (
    <>
      {isMenuActive ? (
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            gap: "30px",
            pt: "83px",
            mb: "98px",
            alignItems: "center",
          }}
        >
          <Link href="/">
            <Typography variant="caption" color="custom.light">
              Home
            </Typography>
          </Link>

          <Typography variant="caption" color="custom.light">
            Shop
          </Typography>

          <Typography variant="caption" color="custom.light">
            About
          </Typography>

          <Typography variant="caption" color="custom.light">
            Blog
          </Typography>

          <Typography variant="caption" color="custom.light">
            Contact
          </Typography>

          <Typography variant="caption" color="custom.light">
            Pages
          </Typography>

          <Button>
            <PersonOutlineOutlinedIcon sx={{ fontSize: "27px" }} />
            <Typography variant="caption" color="primary">
              Login / Register
            </Typography>
          </Button>
          <Button>
            <SearchOutlinedIcon sx={{ fontSize: "30px" }} />
          </Button>
          <Button onClick={() => dispatch(toggleDrawerOpen("cart"))}>
            <ShoppingCartOutlinedIcon sx={{ fontSize: "30px" }} />
            {cart.length}
          </Button>

          <Button onClick={() => dispatch(toggleDrawerOpen("wishlist"))}>
            <FavoriteBorderOutlinedIcon sx={{ fontSize: "30px" }} />
            {wishlist.length}
          </Button>
        </Box>
      ) : null}

      <Box
        sx={{
          padding: { xs: "34px 0 82px 0", md: "34px 147px 0 147px" },
          backgroundColor: "cBackground.main",
          display: "flex",
          justifyContent: { xs: "center", md: "start" },
        }}
      >
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumb}
          </Breadcrumbs>
        </Stack>
      </Box>

      {error ? (
        <Box
          display="flex"
          justifyContent="center"
          height="100px"
          padding="40px"
        >
          <Typography>An error occured!</Typography>
        </Box>
      ) : (
        <Box
          sx={{
            padding: { xs: "48px 14px", md: "48px 147px" },
            backgroundColor: "cBackground.main",
          }}
        >
          <Grid container columnSpacing={7} rowSpacing={4}>
            <Grid item xs={12} sm={12} md={6}>
              {isLoading ? (
                <Skeleton variant="rectangular" height={450} />
              ) : (
                <Swipper images={data?.images} />
              )}

              <Box
                sx={{
                  marginTop: { xs: "42px", sm: "21px", md: "21px" },
                  display: "flex",
                  alignItems: "center",
                  gap: "19px",
                }}
              >
                {isLoading ? (
                  <>
                    {Array.from({ length: 4 }).map((_, index) => {
                      return (
                        <Skeleton
                          key={index}
                          variant="rectangular"
                          width={100}
                          height={75}
                          sx={{ mt: "5px" }}
                        />
                      );
                    })}
                  </>
                ) : (
                  data?.images.map((image, index) => {
                    return (
                      <Box
                        key={index}
                        sx={{ maxWidth: "100px", maxHeight: "75px" }}
                      >
                        <Image
                          src={image}
                          width={"100"}
                          height={"75"}
                          style={{ height: "75px", width: "100%" }}
                          alt="product picture preview"
                        />
                      </Box>
                    );
                  })
                )}
              </Box>
            </Grid>

            <Grid
              xs={12}
              sm={12}
              md={6}
              item
              sx={{
                padding: "11px",
              }}
              key={data?.id}
            >
              <Typography
                variant="h4"
                color="custom.main"
                marginBottom={"14px"}
              >
                {isLoading ? (
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={90}
                  />
                ) : (
                  data?.title
                )}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2px",
                  marginBottom: "21px",
                }}
              >
                <Rating name="read-only" value={data?.rating} readOnly />
                <Typography
                  variant="h6"
                  color="custom.light"
                  sx={{ display: "inline-block" }}
                >
                  {isLoading ? (
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      width={70}
                    />
                  ) : (
                    ` ${data?.rating}  Reviews`
                  )}
                </Typography>
              </Box>
              <Typography
                variant="h3"
                color="custom.main"
                marginBottom={"14px"}
              >
                {isLoading ? (
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={70}
                  />
                ) : (
                  ` $${data?.price}`
                )}
              </Typography>
              <Box color="custom.light" marginBottom={"14px"}>
                {"Availability : "}

                {isLoading ? (
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={70}
                  />
                ) : (data?.stock as number) > 0 ? (
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ display: "inline-block" }}
                  >
                    In Stock
                  </Typography>
                ) : (
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ display: "inline-block" }}
                  >
                    Not Available
                  </Typography>
                )}
              </Box>
              <Box
                display="flex"
                borderTop="1px solid #BDBDBD"
                paddingTop="29px"
                marginTop="119px"
                gap="10px"
              >
                {Array.from({ length: 4 }).map((_, index) => {
                  return <ColorOptions key={index} index={index} />;
                })}
              </Box>
              <Box marginTop="67px" sx={{ display: "flex", gap: "5px" }}>
                <Button variant="contained" sx={{ backgroundColor: "primary" }}>
                  Select Options
                </Button>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <IconButton
                    className="icon-btn-rounded"
                    aria-label="add to wishlist"
                    onClick={() => {
                      dispatch(addToWishlist(data));
                      dispatch(
                        showSnackBar({
                          severity: "success",
                          message: "Add to wishlist",
                        })
                      );
                    }}
                  >
                    <FavoriteBorderOutlinedIcon sx={{ color: "custom.main" }} />
                  </IconButton>
                  <IconButton
                    className="icon-btn-rounded"
                    aria-label="add to shopping cart"
                    onClick={() => {
                      dispatch(addToCart(data));
                      dispatch(
                        showSnackBar({
                          severity: "success",
                          message: "Add to shopping cart",
                        })
                      );
                    }}
                  >
                    <ShoppingCartOutlinedIcon sx={{ color: "custom.main" }} />
                  </IconButton>
                  <IconButton
                    className="icon-btn-rounded"
                    aria-label="Eye icon"
                  >
                    <RemoveRedEyeIcon sx={{ color: "custom.main" }} />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}

      <Box
        sx={{
          padding: { xs: "8px 14px", md: "8px 147px" },
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <Box sx={{ padding: "24px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "48px",
            }}
          >
            <Typography variant="h6" color="custom.light">
              Descriptions
            </Typography>
            <Typography variant="h6" color="custom.light">
              Additional Information
            </Typography>
            <Typography variant="h6" color="custom.light">
              Reviews (0)
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "block", md: "grid" },
          }}
          gridTemplateColumns="repeat(10, 1fr)"
          gap={1}
          paddingTop={"44px"}
          borderTop={"1px solid #ECECEC"}
        >
          <Box gridColumn="span 6" sx={{ height: "100%", margin: "8px" }}>
            <Typography variant="h3" color="custom.main" marginBottom={"14px"}>
              the quick fox jumps over
            </Typography>

            <Typography
              variant="subtitle1"
              color="custom.light"
              marginBottom={"30px"}
              paddingRight={"150px"}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </Typography>
            <Typography
              variant="subtitle1"
              color="custom.light"
              marginBottom={"30px"}
              paddingRight={"160px"}
              paddingLeft={"16px"}
              borderLeft={"3px solid #23856D"}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </Typography>
            <Typography
              variant="subtitle1"
              color="custom.light"
              marginBottom={"30px"}
              paddingRight={"150px"}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </Typography>
          </Box>
          <Box gridColumn="span 4" sx={{ height: "100%", margin: "8px" }}>
            <Image
              src={productBanner}
              alt="product banner"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: { xs: "8px 14px", md: "8px 100px" },
          backgroundColor: "cBackground.main",
        }}
      >
        <Box
          sx={{
            padding: { xs: "8px 14px", md: "8px 60px" },
            backgroundColor: "cBackground.main",
            marginTop: "48px",
            marginBottom: "-72px",
          }}
        >
          <Typography variant="h3" color="custom.main" marginBottom={"24px"}>
            BESTSELLER PRODUCTS
          </Typography>
          <hr />
        </Box>
        <DynamicProducts
          isError={error}
          products={formatedProducts as ProductsResponseT}
          isLoading={isLoading}
        />
        <Companies />
      </Box>
      <Footer />
    </>
  );
}

export default ProductDetail;
