import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from './AuthForm.module.scss';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  const toggleAuthState = () => {
    setIsLogin( (prevState) => {
        return !prevState;
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    navigate('/');

  }

  return (
    <div className={classes.auth}>

      <div className={classes.loginForm}>

      <div className={classes.title}>
      <h1>{isLogin ? "Login" : "Sign up"}</h1>
      </div>
      

      <form onSubmit={submitHandler} className={classes.loginInput}>
        <div className={classes.control}>
          <label htmlFor="email" className={classes.inputText}>Enter your email</label>
          <input type="email" id="email" required className={classes.inputField}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="password" className={classes.inputText}>Enter your password</label>
          <input type="password" id="password" required className={`${classes.inputField} ${classes.passwordField}`}></input>
        </div>

        <div className={classes.actions}>
            <button className={`${classes.btn} ${classes.btn_primary}`}>{isLogin ? 'Login' : 'Create new account'}</button>
            <button className={`${classes.toggle} ${classes.btn}`} onClick={toggleAuthState}>{isLogin ? 'Create new account' : 'Login with an existing account'}</button>
        </div>
      </form>



      </div>
      
    </div>
  );
};

export default AuthForm;

