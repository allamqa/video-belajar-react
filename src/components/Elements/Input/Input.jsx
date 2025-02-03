const Input = (props) =>{
    const{type,placeholder,name} = props;
    return(
        <input type={type} placeholder={placeholder} name={name} required></input>
    );
}

export default Input;