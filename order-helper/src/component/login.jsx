import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import{useNavigate} from "react-router";
import { useAuth } from "./AuthContext";
import { Link } from "react-router";
const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
    username: Yup.string().required("Required"),
});
export default function Login() {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const nevigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
      username: "",
    },

    validationSchema: SignupSchema,
    onSubmit: (values) => {
      axios
        .post("https://dummyjson.com/auth/login", values)
        .then((res) => {
          login(res.data.accessToken, res.data);
          setSuccessMessage("Logged in successfully!");
          nevigate("/home");
        })
        .catch((error) => console.log(error));
    },
  });

  return (
    <>
    <h5 className="mb-4">login</h5>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">  
          <Form.Control
            type="text"
            placeholder="Enter email"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Group>
       
            <p className="text-danger fs-7 text">{formik.touched.password && formik.errors.password}</p>
        <Form.Group className="mb-3" controlId="formBasicPassword">            
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Group>  
        <p className="text-danger fs-7">
            {formik.touched.password && formik.errors.password}
        </p>
        <Button variant="primary" type="submit" className="btn-purple w-100">
          Login
        </Button>
        <div>
        <Form.Text className="text-muted fs-7">
           You Dont Have Account ? <Link to="/register" >Register</Link>
          </Form.Text>
        </div>
      </Form>
    </>
  );
}
