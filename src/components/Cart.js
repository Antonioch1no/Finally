import { useEffect } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { checkoutThunk, getCartThunk } from "../store/slices/cart.Slice";

const Cart = ({ show, handleClose }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCartThunk());
	}, []);

	const cart = useSelector((state) => state.cart);

	return (
		<>
			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Cart</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					{cart.products?.map((cartProduct) => (
						<div key={cartProduct.id}>{cartProduct.title}</div>
					))}
					<Button onClick={() => dispatch(checkoutThunk())}>Checkout</Button>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};
export default Cart;
