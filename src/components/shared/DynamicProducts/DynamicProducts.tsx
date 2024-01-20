"use client";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import productCover from "/public/product-cover.png";
import { StaticImageData } from "next/image";
import Link from "next/link";
const dummyProduct = [
  {
    title: "Graphic Design",
    price: "$16.48",
    productCover: productCover,
    description: "English Department",
    productDetails: "English Department",
    id: 1,
  },
  {
    title: "Graphic Design",
    price: "$16.48",
    productCover: productCover,
    description: "English Department",
    productDetails: "English Department",
    id: 2,
  },
  {
    title: "Graphic Design",
    price: "$16.48",
    productCover: productCover,
    description: "English Department",
    productDetails: "English Department",
    id: 3,
  },
  {
    title: "Graphic Design",
    price: "$16.48",
    productCover: productCover,
    description: "English Department",
    productDetails: "English Department",
    id: 4,
  },
  {
    title: "Graphic Design",
    price: "$16.48",
    productCover: productCover,
    description: "English Department",
    productDetails: "English Department",
    id: 5,
  },
  {
    title: "Graphic Design",
    price: "$16.48",
    productCover: productCover,
    description: "English Department",
    productDetails: "English Department",
    id: 6,
  },
  {
    title: "Graphic Design",
    price: "$16.48",
    productCover: productCover,
    description: "English Department",
    productDetails: "English Department",
    id: 7,
  },
];

type ProductT = {
  title: string;
  price: string;
  productCover: StaticImageData;
  productDetails: string;
  description: string;
  id: number;
};

function DynamicProducts() {
  return (
    <Box sx={{ mt: "90px", mb: "24px", mx: "56px" }}>
      <Box
        sx={{ display: { xs: "block", md: "grid" }, mt: "80px" }}
        gridTemplateColumns="repeat(10, 1fr)"
        gap={1}
      >
        {dummyProduct?.map((product: ProductT) => (
          <Box
            gridColumn="span 2"
            sx={{ height: "100%", margin: "8px" }}
            key={product.id}
          >
            <Link href={`/products/${product.id}`}>
              <Card
                sx={{
                  maxWidth: 390,
                  height: "100%",
                  boxShadow: "none",
                  margin: "auto",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="238"
                    // image={product.productCover}
                    src={"/public/product-cover.png"}
                    alt={product.description}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      fontWeight={700}
                      textAlign="center"
                      color="custom.main"
                      fontSize="15px"
                    >
                      {product.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      textAlign="center"
                      color="custom.light"
                      marginTop="8px"
                      marginBottom="8px"
                    >
                      {product?.productDetails}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Typography
                        variant="h5"
                        textAlign="center"
                        color="custom.contrastText"
                        marginRight="4px"
                      >
                        ${product?.price}
                      </Typography>
                      <Typography
                        variant="h5"
                        textAlign="center"
                        color="secondary.main"
                      >
                        $6.48
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Box>
        ))}
      </Box>

      <Button
        variant="outlined"
        sx={{
          margin: "auto",
          display: "block",
          mt: "40px",
        }}
      >
        LOAD MORE PRODUCTS
      </Button>
    </Box>
  );
}

export default DynamicProducts;
