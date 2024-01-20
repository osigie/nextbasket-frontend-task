import {
  ArrowGrowthIcon,
  BookReaderIcon,
  CarbonBookIcon,
} from "@/components/Icons";
import { CardActionArea, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Services() {
  return (
    <>
      <Box sx={{ mt: "80px", mb: "24px", mx: "56px" }}>
        <Typography variant="h4" textAlign="center" color="custom.light">
          Featured Products
        </Typography>
        <Typography
          variant="h3"
          sx={{ my: "10px" }}
          textAlign="center"
          color="custom.main"
        >
          THE BEST SERVICES
        </Typography>
        <Typography variant="subtitle1" textAlign="center" color="custom.light">
          Problems trying to resolve the conflict between
        </Typography>

        <Grid sx={{ mt: "80px" }} container>
          <Grid item xs={12} sm={12} md={4}>
            <Card
              sx={{
                height: "100%",
                boxShadow: "none",
              }}
            >
              <BookReaderIcon
                sx={{
                  fontSize: "72px",
                  margin: "auto",
                  display: "block",
                }}
              />
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Typography
                    variant="h3"
                    textAlign="center"
                    color="custom.main"
                  >
                    Easy Wins
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    color="custom.light"
                    marginTop="8px"
                    marginBottom="8px"
                    maxWidth="225px"
                  >
                    Get your best looking smile now!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Card sx={{ height: "100%", boxShadow: "none" }}>
              <CarbonBookIcon
                sx={{
                  fontSize: "72px",
                  margin: "auto",
                  display: "block",
                }}
              />
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Typography
                    variant="h3"
                    textAlign="center"
                    color="custom.main"
                  >
                    Concrete
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    color="custom.light"
                    marginTop="8px"
                    marginBottom="8px"
                    maxWidth="232px"
                  >
                    Defalcate is most focused in helping you discover your most
                    beautiful smile
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Card sx={{ height: "100%", boxShadow: "none" }}>
              <ArrowGrowthIcon
                sx={{
                  fontSize: "72px",
                  margin: "auto",
                  display: "block",
                }}
              />
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <Typography
                    variant="h3"
                    textAlign="center"
                    color="custom.main"
                  >
                    Hack Growth
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    color="custom.light"
                    marginTop="8px"
                    marginBottom="8px"
                    maxWidth="225px"
                  >
                    Overcame any hurdle or any other problem.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Services;
