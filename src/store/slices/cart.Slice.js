import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { setIsLoading } from "./isLoading";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		setCart: (state, action) => {
			return action.payload;
		}
	}
});
export const getCartThunk = () => (dispatch) => {
	dispatch(setIsLoading(true));
	axios
		.get("https://e-commerce-api.academlo.tech/api/v1/cart", getConfig())
		.then((res) => dispatch(setCart(res.data.data.cart)))
		.finally(() => dispatch(setIsLoading(false)));
};
export const addCartThunk = (cart) => (dispatch) => {
	dispatch(setIsLoading(true));
	axios
		.post("https://e-commerce-api.academlo.tech/api/v1/cart", cart, getConfig())
		.then(() => dispatch(getCartThunk()))
		.finally(() => dispatch(setIsLoading(false)));
};
export const checkoutThunk = () => (dispatch) => {
	dispatch(setIsLoading(true));
	axios
		.post(
			"https://e-commerce-api.academlo.tech/api/v1/purchases",
			{},
			getConfig()
		)
		.then(() => dispatch(setCart([])))
		.finally(() => dispatch(setIsLoading(false)));
};

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
