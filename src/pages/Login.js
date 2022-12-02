import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { setIsLoading } from "../store/slices/isLoading";

const Login = () => {
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm();
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(setIsLoading(true));
  axios.post('https://e-commerce-api.academlo.tech/api/v1/users/login', data)
  .then(res => {
    navigate("/");
   console.log(res)
   localStorage.setItem("token", res.data.data.token)
  })
  .catch(error => {
  if(error.response?.status === 404){
    alert("contraseña incorrecta")
  }else{
    console.log(error.response?.data)
  }
  
  })
  .finally(() => dispatch(setIsLoading(false)));
  
  }
  return (
    <div>    
      
      <Form onSubmit={handleSubmit(submit)} style={{maxWidth: 500, margin:"0 auto"}}>
    <h1>Login</h1>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" {...register("email")}/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" {...register("password")}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
</div>
  
  )
  }
  export default Login;