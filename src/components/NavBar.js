import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const NavBar = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand as={Link} to="/">
						Ecommerce
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={Link} to="/login">
								Login
							</Nav.Link>
							<Nav.Link as={Link} to="/purchases">
								Purchases
							</Nav.Link>

							<div>
								<Nav.Link onClick={handleShow}>
									<Button className="cart">
										<i class="fa-solid fa-cart-shopping"></i>
									</Button>
								</Nav.Link>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Cart show={show} handleClose={handleClose} />
		</>
	);
};
export default NavBar;
