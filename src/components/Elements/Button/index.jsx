import { Link } from "react-router-dom";
const ButtonForm = (props) =>{

    const{variant,children,link} = props;

    return(
        <Link to={link}><button type="submit" className={variant}>{children}</button></Link>
    );
}

export default ButtonForm;