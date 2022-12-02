import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPurchasesThunk } from "../store/slices/purchases.Slice";

const Purchases = () => {
	const dispatch = useDispatch();
	const purchases = useSelector((state) => state.purchases);
	useEffect(() => {
		dispatch(getPurchasesThunk());
	}, []);
	return (
		<div>
			{purchases.map((purchase) => (
				<div key={purchase.id}>
					{purchase.cart.products.map((product) => (
						<li>
							<Link to={`/product/${product.id}`}>{product.title}</Link>
						</li>
					))}
				</div>
			))}
		</div>
	);
};
export default Purchases;
