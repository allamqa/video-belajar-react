const Input = (props) =>{
    const{type,placeholder} = props;
    return(
        <input type={type} placeholder={placeholder} required></input>
    );
}

export default Input;