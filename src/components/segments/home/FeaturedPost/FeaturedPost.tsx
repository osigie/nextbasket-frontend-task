import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import { featuredPostArray } from "../../../../../lib";
import { SingleFeaturedPost } from "./SingleFeaturedPost";

function FeaturedPost() {
  return (
    <>
      <Box sx={{ mt: "192px", mb: "112px", mx: "56px" }}>
        <Typography variant="h6" textAlign="center" color="primary.main">
          Practice Advice
        </Typography>
        <Typography variant="h2" textAlign="center" color="custom.main">
          Featured Post
        </Typography>

        <Grid sx={{ mt: "80px" }} container columnSpacing={1} rowSpacing={4}>
          {featuredPostArray.map((post, i) => {
            return (
              <SingleFeaturedPost key={i} image={post.image} alt={post.alt} />
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default FeaturedPost;
