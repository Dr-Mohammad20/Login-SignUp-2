import React, {useState , useEffect} from 'react';
import styles from './login.module.css'
import { validate } from './validate';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';

const Login = () => {
    const [singUpData,setSingUpData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false
    })

    const changeHandler1 = event => {
        if(event.target.name === "isAccepted"){
            setSingUpData({...singUpData, [event.target.name] : event.target.checked})
        } else {
            setSingUpData({...singUpData, [event.target.name]: event.target.value})
        }
    }

    const [loginData,setloginData] = useState({
        userName:"",
        loginPassword:"",
    });

    const changeHandler2 = event => {
         setloginData({...loginData, [event.target.name]: event.target.value})
    }

    const [touched, setTouched] = useState({});
    const focusHandler = event => {
        setTouched({...touched , [event.target.name]: true});
        setstate({...state , errorsState:true});
    }


    const [errors, seterrors] = useState({});
    useEffect(() =>{
        seterrors(validate(singUpData , loginData))
    }, [singUpData, loginData , touched]);



    const [state, setstate] = useState ({
        loginState: true,
        signUpState: false,
        errorsState: false
    });
    const loginHandler = () => {
        setstate({
            loginState: true,
            signUpState: false,
            errorsState: false
        })
    };
    const singUpHandler = () => {
        setstate({
            loginState: false,
            signUpState: true
        })
    };

    const loginSubmitHandler = event => {
        event.preventDefault();
        if (!errors.userName && !errors.loginPassword) {
            notify("You login Successefully", "success");
            setloginData({
                userName:"",
                loginPassword:"",
            })
            setTouched({
                userName:false,
                loginPassword:false
            });
        } else {
            setTouched({
                userName:true,
                loginPassword:true,
            });
            setstate({...state , errorsState:true});
            notify("Invalid data!", "error");
        }
    }

    const signUpSubmitHandler = event => {
        event.preventDefault();
        if (!errors.name && !errors.email && !errors.password && !errors.confirmPassword && !errors.isAccepted) {
            notify("You login Successefully", "success");
            setSingUpData({
                name:"",
                email:"",
                password:"",
                confirmPassword:"",
                isAccepted:false
            });
            setTouched({
                name:false,
                email:false,
                password:false,
                confirmPassword:false,
                isAccepted: false
            });
        } else {
            setTouched({
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccepted: true
            });
            setstate({...state , errorsState:true});
            notify("Invalid data!", "error");
        }
    }
    

    return (
        <>
            <div className={(state.loginState && !state.signUpState) ? styles.loginActive : styles.login}>
                <h1>Login</h1>
                <div className={state.loginState ? styles.show : styles.hide}>
                    <form className={styles.loginContainer} onSubmit={loginSubmitHandler}>
                        <div className={styles.loginFormField}>
                            <label>Please enter the user name (Email)</label>
                            <input
                                className={(errors.userName && touched.userName && state.errorsState) ? styles.unComplete : styles.formInput} 
                                type="text"
                                name='userName' 
                                value={loginData.userName} 
                                onChange={changeHandler2} 
                                onFocus={focusHandler}
                            />
                            {errors.userName && touched.userName && state.errorsState &&  <span>{errors.userName}</span>}
                        </div>
                        <div className={styles.loginFormField}>
                            <label>Please enter the password</label>
                            <input
                                className={(errors.loginPassword && touched.loginPassword && state.errorsState) ? styles.unComplete : styles.formInput} 
                                type="password" 
                                name='loginPassword' 
                                value={loginData.loginPassword} 
                                onChange={changeHandler2} 
                                onFocus={focusHandler}
                            />
                            {errors.loginPassword && touched.loginPassword && state.errorsState && <span>{errors.loginPassword}</span>}
                        </div>
                        <button 
                            type='submit' 
                            name='loginSubmit'
                            className={styles.button}>
                            Login
                        </button>
                    </form>
                </div>
                <div className={!state.loginState ? styles.show : styles.hide}>
                    <p>for LogIn please click on button below</p>
                    <button
                        className={state.signUpState ? (styles.show && styles.button) : styles.hide}
                        onClick={loginHandler}>
                        Login
                    </button>
                </div>
            </div>  


            <div className={(state.signUpState && !state.loginState) ? styles.signUpActive : styles.signUp}>
                <h1>Sign Up</h1>
                <div className={state.signUpState ? styles.show : styles.hide}>
                    <form className={styles.signUpContainer} onSubmit={signUpSubmitHandler}>
                        <div className={styles.signUpFormField}>
                            <label>Name</label>
                            <input
                                className={(errors.name && touched.name && state.errorsState) ? styles.unComplete : styles.formInput} 
                                type="text" 
                                name='name' 
                                value={singUpData.name} 
                                onChange={changeHandler1} 
                                onFocus={focusHandler}
                            />
                            {errors.name && touched.name && state.errorsState &&  <span>{errors.name}</span>}
                        </div>
                        <div className={styles.signUpFormField}>
                            <label>Email</label>
                            <input
                                className={(errors.email && touched.email && state.errorsState) ? styles.unComplete : styles.formInput} 
                                type="text" 
                                name='email' 
                                value={singUpData.email} 
                                onChange={changeHandler1} 
                                onFocus={focusHandler}
                            />
                            {errors.email && touched.email && state.errorsState &&  <span>{errors.email}</span>}
                        </div>
                        <div className={styles.signUpFormField}>
                            <label>Password</label>
                            <input
                                className={(errors.password && touched.password && state.errorsState) ? styles.unComplete : styles.formInput} 
                                type="password" 
                                name='password' 
                                value={singUpData.password} 
                                onChange={changeHandler1} 
                                onFocus={focusHandler}
                            />
                            {errors.password && touched.password && state.errorsState &&  <span>{errors.password}</span>}
                        </div>
                        <div className={styles.signUpFormField}>
                            <label>Confirm password</label>
                            <input
                                className={(errors.confirmPassword && touched.confirmPassword && state.errorsState) ? styles.unComplete : styles.formInput} 
                                type="password" 
                                name='confirmPassword' 
                                value={singUpData.confirmPassword} 
                                onChange={changeHandler1} 
                                onFocus={focusHandler}
                            />
                            {errors.confirmPassword && touched.confirmPassword && state.errorsState &&  <span>{errors.confirmPassword}</span>}
                        </div>
                        <div className={styles.checkboxContainer}>
                            <span className={styles.balckSpan}>I accept the policy statements</span>
                            <input
                                type="checkbox" 
                                name='isAccepted' 
                                value={singUpData.isAccepted} 
                                onChange={changeHandler1} 
                                onFocus={focusHandler}
                            />
                            {errors.isAccepted && touched.isAccepted && state.errorsState &&  <span>{errors.isAccepted}</span>}
                        </div>
                        <button
                            type='submit'
                            name='signUpSubmit'
                            className={styles.button}>
                            Sign Up
                        </button>
                    </form>
                </div>        
                <div className={!state.signUpState ? styles.show : styles.hide}>
                <p>for signUp please click on button below</p>
                <button
                    className={state.loginState ? (styles.show && styles.button) : styles.hide}
                    onClick={singUpHandler}>
                    Sign Up
                </button>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Login;