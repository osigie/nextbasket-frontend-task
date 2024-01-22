import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { toggleDrawerClose } from "@/redux/store/menuSlice";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { calTotalPrice } from "../../../../lib";
import { FullProductT } from "../../../../typs";
import ProductCard from "../ProductCard/ProductCard";

type Props = {
  products: FullProductT[];
  title: string;
  variant?: "cart" | "wishlist";
  addHandler?: (id: number) => void;
  removeHandler?: (id: number) => void;
  deleteHandler: (id: number) => void;
};

const DrawerItem = ({
  products,
  title,
  variant = "cart",
  addHandler,
  deleteHandler,
  removeHandler,
}: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
        paddingBottom: "20px",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3" color="custom.main">
          {title}
        </Typography>

        <IconButton
          onClick={() => dispatch(toggleDrawerClose())}
          aria-label="exit"
          sx={{ padding: "0" }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      {products.length > 0 ? (
        <Box
          component="ul"
          sx={{ display: "flex", gap: "5px", flexDirection: "column" }}
        >
          {products.map((product) => {
            return (
              <Box
                key={product.id}
                component="li"
                sx={{
                  display: "flex",
                  gap: "7px",
                  border: "1px solid black",
                  padding: "5px",
                  width: "100%",
                }}
              >
                <ProductCard product={product} variant="small" />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Button
                    onClick={() => deleteHandler(product.id)}
                    endIcon={<DeleteIcon />}
                    variant="outlined"
                    size="small"
                  >
                    Remove
                  </Button>
                  {variant === "cart" ? (
                    <Box display={"flex"}>
                      <IconButton
                        onClick={() => {
                          if (removeHandler) {
                            removeHandler(product.id);
                          }
                        }}
                        aria-label="remove"
                        color="primary"
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography
                        variant="h5"
                        fontWeight={400}
                        color="custom.main"
                        margin={"12px"}
                      >
                        {product?.quantity}
                      </Typography>
                      <IconButton
                        onClick={() => {
                          if (addHandler) {
                            addHandler(product.id);
                          }
                        }}
                        aria-label="add"
                        color="primary"
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  ) : null}
                </Box>
              </Box>
            );
          })}
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography variant="h4">You have an empty {variant}</Typography>
          <Link href={`/`}>
            <Typography
              color="primary"
              variant="subtitle1"
              textAlign={"center"}
            >
              See more amazing deals
            </Typography>
          </Link>
        </Box>
      )}
      <Box color="primary.main">
        <Typography
          color="custom.light"
          variant="h5"
          sx={{ display: "inline-block" }}
        >
          Total
        </Typography>
        : ${calTotalPrice(products)}
      </Box>
    </Box>
  );
};

export default DrawerItem;
