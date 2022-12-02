import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart.Slice";
import isLoadingSlice from "./slices/isLoading";
import productSlice from "./slices/poduct.slice";
import purchasesSlice from "./slices/purchases.Slice";

export default configureStore({
	reducer: {
		product: productSlice,
		isLoading: isLoadingSlice,
		purchases: purchasesSlice,
		cart: cartSlice
	}
});
