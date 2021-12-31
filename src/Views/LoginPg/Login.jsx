import React from 'react';
import './login.css';

export default ()=>{

  return(
    <div className=''>
        <div className="login-wrap">
            <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Sign In</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
                <div className="login-form">
                    <div className="sign-in-htm">
                        <div className="group">
                            <label  className="label">Username</label>
                            <input type="text" className="input" />
                        </div>
                        <div className="group">
                            <label className="label">Password</label>
                            <input type="password" className="input" data-type="password" />
                        </div>
                       
                        <div className="group">
                            <input type="submit" className="button" value="Sign In" />
                        </div>
                       
                    </div>
                    <div className="sign-up-htm">
                        <div className="group">
                            <label className="label">Username</label>
                            <input type="text" className="input" />
                        </div>
                        <div className="group">
                            <label className="label">Password</label>
                            <input type="password" className="input" data-type="password" />
                        </div>
                        <div className="group">
                            <label className="label">Repeat Password</label>
                            <input type="password" className="input" data-type="password" />
                        </div>
                        
                        <div className="group">
                            <input type="submit" className="button" value="Sign Up" />
                        </div>
                        <div className="hr"></div>
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