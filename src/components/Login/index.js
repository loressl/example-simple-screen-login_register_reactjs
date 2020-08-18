import React,{useState} from 'react';
import './styles.scss';
import Input from '../Input';
import Button from '../Button';
import ForgotDialog from '../Dialog';
import Link from '@material-ui/core/Link';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

function Login({setIsOpenLogin, setIsOpenRegister}){
    const initialValues={
        email: '',
        password: ''
    }
    const [values, setValues] =useState(initialValues);
    const [errors, setErrors]= useState(initialValues);
    const [status,setStatus] =useState(true);
    const [openDialog, setOpenDialog] = useState(false);

    function handleChange(e){
        setStatus(false);
        const key = e.target.getAttribute('name');
        const value= e.target.value;
        setValues({
            ...values,
            [key]: value
        });
        switch(key){
          case 'email':
            !emailRegex.test(value) ? setErrors({...errors, [key]: "Email address is not valid"}) : setErrors({...errors, [key]: ""});
            break;
          case 'password':
            value.length < 6 ?setErrors({...errors, [key]: "Please enter valid password"}) : setErrors({...errors, [key]: ""});
            break;
          default:
            break;
        }
    }

    function handleOpenDialog(){
      setOpenDialog(true);
    }

    function handleCloseDialog(){
      setOpenDialog(false);
    }

    function callRegister(){
      setIsOpenLogin(false);
      setIsOpenRegister(true);
    }

    function handleSubmit(e){
      e.preventDefault();
    }

    return(
      <div className="form-wrapper">
          <h1>Login</h1>
          <form onSubmit={handleSubmit} noValidate>
            <Input
              data-testid="email-form-field"
              error={errors.email}
              placeholder="Email"
              type="email"
              name="email"
              handleChange={handleChange}
            />
            <Input 
              error={errors.password}
              placeholder="Password"
              type="password"
              name="password"
              handleChange={handleChange}
            />
            <div className="forgot">
              <Link data-testid="link-forgot" onClick={handleOpenDialog} color="initial">Forgot Password?</Link>
              <ForgotDialog openDialog={openDialog} handleCloseDialog={handleCloseDialog}/>
            </div>
            <Button status={status} handleSubmit={handleSubmit} name={"Sign In"}/>
            <div className="signup">
              <p>Are you new?<Link data-testid="link-register" onClick={callRegister} color="initial">Sign Up</Link></p>
            </div>
          </form>
      </div>
    );


}

export default Login;