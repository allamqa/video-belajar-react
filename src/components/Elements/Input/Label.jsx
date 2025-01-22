
const Label = (props) =>{
    const{children,variant} = props;
    return(
        <label className={variant}>{children}</label> 
    );
}

export default Label;