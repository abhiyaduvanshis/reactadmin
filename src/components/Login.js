import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Validcheck from "../common/Validcheck";
import './../assets/login.css';
import AuthService from "../services/Auth.service";

function Login(){
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');
    const [message,setMassage]=useState('');
    
    const emailChange=(e)=>{
        setEmail(e.target.value);
        const emailck=Validcheck.Emailcheck(e.target.value);
        setMassage(emailck);
        return false;
    }

    const passwordChange=(e)=>{
        setPassword(e.target.value);
        const passwordck=Validcheck.Inputcheck(e.target.value);
        setMassage(passwordck);
        return false;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setEmail(event.target.email.value);
        setPassword(event.target.password.value);
        if(Validcheck.Emailcheck(email)==true && Validcheck.Inputcheck(password)==true){
            AuthService.login(email,password).then((res)=>{
                console.log(res);
                if(res.code==200 && res.payload!=''){
                    navigate('/admin/dashboard');
                    window.location.reload();
                }else{
                    setMassage('Email or Password is wrong3');
                }
            },err =>{setMassage('Email or Password is wrong2')}); 
        }else{
            setMassage('Email or Password is wrong1');
        }  
    };
  
    return(
    <>
        <section className="vh-100" style={{backgroundColor:'#508bfc'}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
                        <div className="card-body p-5 text-center">
                            <h3 className="mb-5">Sign in</h3>
                            <span className="mb-4 warm" >{message}</span>
                            <form onSubmit={handleSubmit}>
                            <div className="form-outline mb-4">
                            <input type="text" className="form-control form-control-lg" placeholder="Email Address" name="email" onChange={emailChange} value={email}/>
                            </div>

                            <div className="form-outline mb-4">
                            <input type="password" className="form-control form-control-lg" placeholder="Password Address" name="password" onChange={passwordChange}  value={password}/>
                            </div> 

                            <button className="btn btn-primary btn-lg btn-block" type="submit" >Login</button>
                            </form>
                             <hr/>
                            <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor:"#3b5998"}}
                            type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
                            <button className="btn btn-lg btn-block btn-primary" style={{backgroundColor:"#dd4b39"}}
                            type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button> <br/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
    )
}
export default Login;