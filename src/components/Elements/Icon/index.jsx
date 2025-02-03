const Icon = (props) =>{
    const{type,logo,color,variant} = props;
    return(
        <a href="#"><box-icon className={variant} color={color} type={type} name={logo}></box-icon></a>
    );
}

export default Icon;