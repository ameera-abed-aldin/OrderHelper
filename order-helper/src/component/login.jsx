
import {Form,Button} from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; 
const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
 export default function Login(){
    const formik = useFormik({
        initialValues: {
          password:'',
          email: '',
        },
        
       validationSchema :SignupSchema,
        onSubmit: values => {
          
        },
      });
    return (
        <>
           <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Text className="text-muted">
      { formik.touched.email && formik.errors.email}
         </Form.Text>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={formik.values.email}  onChange={formik.handleChange} onBlur={formik.handleBlur} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Text className="text-muted">
      { formik.touched.password && formik.errors.password}
         </Form.Text>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </>
    )

}
