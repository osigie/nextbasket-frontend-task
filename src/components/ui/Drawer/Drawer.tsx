"use client";

import DrawerItem from "@/components/shared/DrawerItem/DrawerItem";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import { toggleDrawerOpen, toggleDrawerClose } from "@/redux/store/menuSlice";
import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "@/redux/store/cartSlice";
import { FullProductT } from "../../../../typs";
import { removeFromWishlist } from "@/redux/store/wishlistSlice";

const RigtDrawer = () => {
  const dispatch = useAppDispatch();
  const { drawer, currentDrawerState } = useAppSelector((state) => state.menu);
  const { cart } = useAppSelector((state) => state.app.cart);
  const { wishlist } = useAppSelector((state) => state.app.wishlist);

  return (
    <>
      <Drawer
        anchor={"right"}
        open={drawer}
        onClose={() => dispatch(toggleDrawerClose())}
      >
        {currentDrawerState === "cart" ? (
          <Box sx={{ padding: "10px", height: "100%" }} color="secondary">
            <DrawerItem
              addHandler={(id) => dispatch(increaseQuantity(id))}
              removeHandler={(id) => dispatch(decreaseQuantity(id))}
              products={cart}
              deleteHandler={(id) => dispatch(removeItem(id))}
              title="Cart"
              total={500}
            />
          </Box>
        ) : (
          <Box sx={{ padding: "10px", height: "100%" }}>
            <DrawerItem
              products={wishlist as FullProductT[]}
              deleteHandler={(id) => dispatch(removeFromWishlist(id))}
              title="Wishlist"
              total={200}
              variant="wishlist"
            />
          </Box>
        )}
      </Drawer>
    </>
  );
};

export default RigtDrawer;
