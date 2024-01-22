import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { ProductT } from "../../../../typs";
import { discountedPrice } from "../../../../lib";
import { ProductCardLoader } from "./ProductCardLoader";

type Props = {
  product: ProductT;
  variant?: "small" | "large";
  isLoading?: boolean;
};

const ProductCard = ({ product, variant = "large", isLoading }: Props) => {
  return (
    <>
      {isLoading ? (
        <ProductCardLoader />
      ) : (
        <Link href={`/product-detail/${product.id}`}>
          <Card
            sx={{
              maxWidth: variant === "large" ? 390 : 200,
              height: "100%",
              boxShadow: "none",
              margin: "auto",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height={variant === "large" ? "238" : "100"}
                image={product.thumbnail}
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
                  {product?.title}
                </Typography>
                <Typography
                  variant="h6"
                  textAlign="center"
                  color="custom.light"
                  marginTop="8px"
                  marginBottom="8px"
                >
                  {product?.brand}
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
                    {discountedPrice(
                      product?.price,
                      product?.discountPercentage
                    )}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      )}
    </>
  );
};

export default ProductCard;
