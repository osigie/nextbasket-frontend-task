import { createSlice } from "@reduxjs/toolkit";
import { ProductT } from "../../../typs";

type initialStateType = {
  wishlist: ProductT[];
};

const initialState: initialStateType = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const wishlist = state.wishlist.find(
        (item) => item.id === action.payload.id
      );
      if (!wishlist) {
        state.wishlist.push({ ...action.payload });
      }
    },
    removeFromWishlist: (state, action) => {
      const removeItem = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
      state.wishlist = removeItem;
    },
  },
});

export const wishlistReducer = wishlistSlice.reducer;
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
