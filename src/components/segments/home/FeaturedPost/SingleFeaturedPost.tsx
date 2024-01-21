import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CardActionArea, Grid } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { ChartIcon, ClockIcon } from "@/components/Icons";

export const SingleFeaturedPost = ({
  image,
  alt,
}: {
  image: StaticImageData;
  alt: string;
}) => {
  return (
    <Grid item xs={12} sm={12} md={4}>
      <Card sx={{ maxWidth: 345, height: "100%", margin: "auto" }}>
        <Box sx={{ position: "relative" }}>
          <Image
            src={image}
            alt={alt}
            style={{ margin: "auto", display: "block" }}
          />
          <Typography
            variant="h6"
            textAlign="center"
            color="#fff"
            mr="15px"
            bgcolor="cBackground.light"
            position="absolute"
            padding="4px 16px"
            top="20px"
            left="20px"
            borderRadius={"3px"}
          >
            NEW
          </Typography>
        </Box>
        <CardActionArea>
          <CardContent>
            <Box sx={{ display: "flex", width: "100%", mb: "16px" }}>
              <Typography
                variant="subtitle2"
                textAlign="center"
                color="primary"
                mr="15px"
              >
                Google
              </Typography>
              <Typography
                variant="subtitle2"
                textAlign="center"
                color="custom.light"
                mr="15px"
              >
                Trending
              </Typography>
              <Typography
                variant="subtitle2"
                textAlign="center"
                color="custom.light"
              >
                New
              </Typography>
            </Box>
            <Typography variant="h4" color="custom.main">
              Loudest à la Madison #1 (L&apos;integral)
            </Typography>
            <Typography
              variant="subtitle1"
              color="custom.light"
              marginTop="8px"
              marginBottom="8px"
            >
              We focus on ergonomics and meeting you where you work. It&apos;s
              only a keystroke away.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <ClockIcon sx={{ fontSize: "16px" }} />
                <Typography
                  variant="subtitle2"
                  fontWeight={400}
                  color="custom.light"
                  fontSize="12px"
                  marginTop="8px"
                  marginBottom="8px"
                >
                  22 April 2021
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <ChartIcon sx={{ fontSize: "16px" }} />
                <Typography
                  variant="subtitle2"
                  textAlign="center"
                  color="custom.light"
                  marginTop="8px"
                  marginBottom="8px"
                >
                  10 comments
                </Typography>
              </Box>
            </Box>
            <Box>
              <IconButton aria-label="learn more">
                <Typography variant="h6" color="custom.light" mr="4px">
                  Learn More
                </Typography>
                <ArrowForwardIosIcon color="primary" />
              </IconButton>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
