import Router from 'next/router';
import { useState } from 'react';
import useRequest from '../../hooks/use-request';

export default () =>{


    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const {doRequest,errors}  = useRequest({
        url: '/api/users/signin',
        method: 'post',
        body: {
            email,password
        },
        onSuccess:()=> Router.push('/')
    })

const onSubmit = async (event)=>{
    event.preventDefault();

    await doRequest();

}
    return (
        
                  <div className="position-absolute translate-middle top-50 start-50  sign-w"> 
                        <div className="container">
                                <div className="row">
                                        <div className="col-6 text-center">
                                            <h1>Sign in</h1>
                                            <form onSubmit={onSubmit}>
                                                <input type="text" value={email} onChange={e=>setEmail(e.target.value)} className="form-control border-0 border-bottom d-block" placeholder="Enter your email"  />
                                                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control border-0 border-bottom d-block" placeholder="Enter your password"  />
                                                {errors}
                                               <button className="form-submit sub-but" type="submit">Sign in</button>
                                            </form>
                                        </div>
                                        <div className="col-6 text-end">
                                            <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg"  height="315px"  alt="signup image" />
                                        </div>
                                </div>
                        </div>
                  </div>
        
    )
}