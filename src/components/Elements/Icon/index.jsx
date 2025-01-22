const Icon = (props) =>{
    const{type,name,color,variant} = props;
    return(
        <>
        <a href="#"><box-icon className={variant} color={color} type={type} name={name}></box-icon></a>
        </>
    );
}

export default Icon;