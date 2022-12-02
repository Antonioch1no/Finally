import { useEffect, useState } from "react";
import { Button, Card, Carousel, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addCartThunk } from "../store/slices/cart.Slice";
import { getProductThunk } from "../store/slices/poduct.slice";

const ProductDetail = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [quantity, setCuantity] = useState();

	useEffect(() => {
		dispatch(getProductThunk());
	}, []);

	const newProduct = useSelector((state) => state.product);

	const products = newProduct.find((newsItem) => newsItem.id === Number(id));

	const productsRelated = newProduct.filter(
		(related) =>
			related.category.id === products?.category.id &&
			related.id !== products.id
	);
	const addToCart = () => {
		const cart = {
			id: products.id,
			quantity: quantity
		};
		dispatch(addCartThunk(cart));
	};
	return (
		<div>
			<Row>
				<Col lg={9}>
					<Card style={{ backgroundColor: "white" }}>
						<Carousel>
							<Carousel.Item>
								<img
									className="d-block w-100"
									variant="top"
									src={products?.productImgs[0]}
									style={{ height: "200px", objectFit: "contain" }}
									alt="First slide"
								/>
								<Carousel.Caption></Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									variant=""
									src={products?.productImgs[1]}
									style={{ height: "200px", objectFit: "contain" }}
									alt="Second slide"
								/>

								<Carousel.Caption></Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									variant="top"
									src={products?.productImgs[2]}
									style={{ height: "200px", objectFit: "contain" }}
									alt="Third slide"
								/>

								<Carousel.Caption></Carousel.Caption>
							</Carousel.Item>
						</Carousel>
						<Card.Body>
							<Card.Title>
								<b>{products?.title}</b>
							</Card.Title>
							<div style={{ fontSize: "20px", color: "black" }}>
								<b>$ {products?.price} </b>
							</div>
							<Card.Text style={{ fontSize: "8px", color: "black" }}>
								{products?.description}
							</Card.Text>
						</Card.Body>
						<input
							style={{ width: "50px", position: "center", margin: "0 auto" }}
							type="number"
							id="number"
							min="0"
							max="5"
							value={quantity}
							onChange={(e) => setCuantity(e.target.value)}
						/>
						<Button
							onClick={addToCart}
							style={{ width: "150px", position: "center", margin: "0 auto" }}
						>
							add to Cart
						</Button>
					</Card>
				</Col>

				<Col>
					<ListGroup className="relatesImg">
						{productsRelated.map((related) => (
							<ListGroup.Item className="relatesImg1">
								<img
									src={related?.productImgs[0]}
									alt=""
									className="img-fluid"
								/>
								<Link to={`/product/${related.id}`}>{related.title}</Link>
							</ListGroup.Item>
						))}
					</ListGroup>
				</Col>
			</Row>
			<br />

			<div></div>
		</div>
	);
};
export default ProductDetail;
