import React,{useState} from 'react';
import Input from '../Input';
import Button from '../Button';
import {Link} from 'react-router-dom';
import './styles.scss';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

function Register({setIsOpenLogin, setIsOpenRegister}){
    const initialValues={
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    };
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialValues);
    const [status,setStatus] =useState(true);

    function backToLogin(){
        setIsOpenLogin(true);
        setIsOpenRegister(false);
    }

    function handleChange(e){
        setStatus(false);
        const key = e.target.getAttribute('name');
        const value= e.target.value;
        setValues({
            ...values,
            [key]: value
        });
        switch(key){
            case 'name':
                values.name.length === 0 ? setErrors({...errors, [key]: "Please enter with your name"}) : setErrors({...errors, [key]: ""});
                break;
            case 'email':
                !emailRegex.test(value) ? setErrors({...errors, [key]: "Email address is not valid"}) : setErrors({...errors, [key]: ""});
                break;
            case 'password':
                values.password.length < 6 ?setErrors({...errors, [key]: "Please enter valid password"}) : setErrors({...errors, [key]: ""});
                break;
            case 'confirmPassword':
                values.password !== value ? setErrors({...errors, [key]: "Password is different"}) : setErrors({...errors, [key]: ""});
                break;
            default:
                break;
          }

    }

    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <div className="form-register-wrapper">
            <h1>Register</h1>
            <form onSubmit={handleSubmit} noValidate>
                <Input 
                    error={errors.name}
                    placeholder="Name"
                    type="text"
                    name="name"
                    handleChange={handleChange}
                />
                <Input 
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
                <Input 
                    error={errors.confirmPassword}
                    placeholder="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    handleChange={handleChange}
                />
                <Button status={status} handleSubmit={handleSubmit} name={"Register"}/>
                <div className="backtologin">
                    <Link onClick={backToLogin}>Back to Login</Link>
                </div>
            </form>
        </div>
    );
}

export default Register;