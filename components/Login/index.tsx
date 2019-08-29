import * as React from 'react';
import Button from '../Button';

const Login = (props) => {
    const[modalOpen, setModalOpen] = React.useState(false);
    const[state, setState] = React.useState({
        username: '',
        password: ''
    });
    const handleChange = event => {
        const { name } = event.target
        setState({
            ...state, 
            [name]: event.target.value 
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleToggle();
    }
    return(
        <div className="login" >
            <form className="login__form" onSubmit={handleSubmit} >
                <h1>Login</h1>
                <div  className="login__form__group" >
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={state.username}
                    onChange={handleChange}
                    required
                />
                </div>
                <div  className="login__form__group" >
                     <input
                type="password"   
                name="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
                required
                /> 
                </div>
                <div  className="login__form__group" >
                    <input
                    type="checkbox"
                    name="remember"
                    /> <label>Remmember me 
                </label>
                </div>
                
          
                  <Button text="Login" />
               
                <div className="login__footer" >
                    Don't have an account? <a href="/" >Sign Up</a>
                </div>
                <div className="login__footer"><a href="/" >Forgot your password?</a></div>
            </form>
        </div>
  
)};

export default Login;