import axios from "axios";
import { useEffect, useState } from "react";
import {
	Button,
	Card,
	Col,
	InputGroup,
	ListGroup,
	Row,
	Form,
	Carousel
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	filterCategoryTunk,
	filterInputThunk,
	getProductThunk
} from "../store/slices/poduct.slice";

const Home = () => {
	const [forCategory, setForCategory] = useState([]);
	const [inputSearch, setInputSearch] = useState("");
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product);
	useEffect(() => {
		dispatch(getProductThunk());
		axios
			.get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
			.then((res) => setForCategory(res.data.data.categories));
	}, []);
	console.log(products);

	return (
		<div>
			<div>
				<Row>
					<Col lg={3}>
						<ListGroup className="navCategory">
							{forCategory?.map((category) => (
								<ListGroup.Item
									onClick={() => dispatch(filterCategoryTunk(category.id))}
								>
									{category.name}
								</ListGroup.Item>
							))}
						</ListGroup>
					</Col>

					<Col lg={9}>
						<div>
							<InputGroup className="mb-3">
								<Form.Control
									placeholder="Recipient's username"
									aria-label="Recipient's username"
									aria-describedby="basic-addon2"
									value={inputSearch}
									onChange={(e) => setInputSearch(e.target.value)}
								/>
								<Button
									variant="outline-secondary"
									onClick={() => dispatch(filterInputThunk(inputSearch))}
								>
									Search
								</Button>
							</InputGroup>
						</div>
						<Row xs={1} md={2} lg={3} className="g-4">
							{products.map((product) => (
								<Link
									to={`/product/${product.id}`}
									style={{ textDecoration: "none" }}
								>
									<Col>
										<Card className="imgHome">
											<Carousel>
												<Carousel.Item>
													<img
														className="d-block w-100"
														variant="top"
														src={product.productImgs[0]}
														style={{ height: "200px", objectFit: "contain" }}
														alt="First slide"
													/>
													<Carousel.Caption></Carousel.Caption>
												</Carousel.Item>
												<Carousel.Item>
													<img
														className="d-block w-100"
														variant=""
														src={product.productImgs[1]}
														style={{ height: "200px", objectFit: "contain" }}
														alt="Second slide"
													/>

													<Carousel.Caption></Carousel.Caption>
												</Carousel.Item>
												<Carousel.Item>
													<img
														className="d-block w-100"
														variant="top"
														src={product.productImgs[2]}
														style={{ height: "200px", objectFit: "contain" }}
														alt="Third slide"
													/>

													<Carousel.Caption></Carousel.Caption>
												</Carousel.Item>
											</Carousel>
											<Card.Img />
											<Card.Body>
												<Card.Title>{product.title}</Card.Title>
												<Card.Text>${product.price}</Card.Text>
											</Card.Body>
										</Card>
									</Col>
								</Link>
							))}
						</Row>
					</Col>
				</Row>
			</div>

			<div></div>
		</div>
	);
};
export default Home;
