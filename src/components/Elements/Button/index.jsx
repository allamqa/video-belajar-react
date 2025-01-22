const ButtonForm = (props) =>{

    const{variant,children} = props;

    return(
        <button type="submit" className={variant}>{children}</button>
    );
}

export default ButtonForm;