const Button = (props) => 
    <button type="submit" onClick={props.handleClick} className="button" >
        {props.text}
    </button>;
    
export default Button;