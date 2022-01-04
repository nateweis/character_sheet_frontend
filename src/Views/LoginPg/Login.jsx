import React, {useState} from 'react';
import Auth from '../../models/Auth';
import './login.css';

export default ()=>{
    const initalState = {siUser : "",siPass : "",suUser : "",suPass : "",suPass2: "",completeMsg: '', errMsg :"", "tab-1": true, "tab-2": false}
    const [loginState, setLoginState] = useState(initalState)

    const checkFormFeilds = () => {
        if(loginState['tab-2']){
            if(loginState.suUser.length <= 2){
                setLoginState({...loginState, errMsg: "Longer Username Required (Minimum Characters 2)", suUser: ""})
                return false
            }
            else if(loginState.suPass.length < 8) {
                setLoginState({...loginState, errMsg: "Password Has To Be At Least 8 Characters Long", suPass: "", suPass2: ""})
                return false
            }
            else if(loginState.suPass !== loginState.suPass2){
                setLoginState({...loginState, errMsg: "Confirmation Password Has To Match Password", suPass2: ""})
                return false
            }
            else return 'signUp'
        }
        else{
            if(loginState.siUser.length < 1 || loginState.siPass.length < 1){
                setLoginState({...loginState, errMsg: "Please Fill In Both Feilds"})
                return false
            }
            else return 'signIn'
        }
    }

    const handleChange = (e) => {
        setLoginState({...loginState, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const goodFeilds = checkFormFeilds()
        if(goodFeilds === 'signUp'){
            const status = await newUser({id: 1, username: loginState.suUser, password: loginState.suPass})
            if(status === "User Made"){
                setLoginState({...initalState, completeMsg: "Sign Up Success"})
            }
            else if(status === "Username already exists"){
                setLoginState({...loginState, errMsg: "Username Already Taken", suUser: ""})
            }
        }
        else if(goodFeilds === 'signIn'){
            const result = await signIn({username: loginState.siUser, password: loginState.siPass})
            if(result.message === 'wrong username or Password') setLoginState({...loginState, errMsg: "Wrong Username or Password", siUser: "", siPass: ""})
            else{
                Auth.saveToken(result.token)
            }
        }
    }

    const newUser = (obj) => {
        return new Promise((resovle, reject) => {
            fetch('http://localhost:3001/users/newUser',{method: 'POST', headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(obj)})
            .then(res => {
                res.json()
                .then(data => resovle(data.message))
                .catch(err => {})
            })
        })
    }

    const signIn = (obj) => {
        return new Promise((resovle, reject) => {
            fetch('http://localhost:3001/users',{method: 'POST', headers:{'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(obj)})
            .then(res => {
                res.json()
                .then(data => resovle(data))
                .catch(err => {})
            })
        })
    }

    const tabChange = (e) => {
        let tab1, tab2
        if(e.target.id === 'tab-1'){tab1 = true; tab2 = false} 
        else {tab1 = false; tab2 = true};
        setLoginState({...initalState, 'tab-1': tab1, 'tab-2': tab2});
    }

  return(
    <div className=''>
        <div className="login-wrap">
            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked={loginState['tab-1']} onClick={tabChange} readOnly />
                <label htmlFor="tab-1" className="tab">Sign In</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" checked={loginState['tab-2']} onClick={tabChange} readOnly />
                <label htmlFor="tab-2" className="tab">Sign Up</label>
                <div className="login-form">
                    <div className="sign-in-htm">
                        <div className="group">
                            <label  className="label">Username</label>
                            <input type="text" className="input" name="siUser" onChange={handleChange} value={loginState.siUser} />
                        </div>
                        <div className="group">
                            <label className="label">Password</label>
                            <input type="password" className="input" name="siPass" onChange={handleChange} value={loginState.siPass} />
                        </div>
                       
                        <div className="group">
                            <input type="submit" className="button" value="Sign In" onClick={handleSubmit} />
                        </div>

                        <div className="hr"></div>
                        <div className='comp-msg'>{loginState.completeMsg} </div>
                        <div className='error-msg'>{loginState.errMsg} </div>
                       
                    </div>
                    <div className="sign-up-htm">
                        <div className="group">
                            <label className="label">Username</label>
                            <input type="text" className="input" name="suUser" onChange={handleChange} value={loginState.suUser} />
                        </div>
                        <div className="group">
                            <label className="label">Password</label>
                            <input type="password" className="input"name="suPass" onChange={handleChange} value={loginState.suPass} />
                        </div>
                        <div className="group">
                            <label className="label">Repeat Password</label>
                            <input type="password" className="input" name="suPass2" onChange={handleChange} value={loginState.suPass2} />
                        </div>
                        
                        <div className="group">
                            <input type="submit" className="button" value="Sign Up" onClick={handleSubmit} />
                        </div>
                        <div className="hr"></div>
                        <div className='error-msg group'>{loginState.errMsg} </div>
                        <div className="foot-lnk">
                            <label htmlFor="tab-1">Already Member?</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}