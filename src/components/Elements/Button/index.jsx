import { Link } from "react-router-dom";
const ButtonForm = (props) =>{

    const{variant,onClick = () => {},type="button",children} = props;

    return(
        <button type="submit" onClick={() => onClick()} className={variant}>{children}</button>
    );
}

export default ButtonForm;