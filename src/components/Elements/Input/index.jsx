import Icon from "../Icon";
import Input from "./Input";
import Label from "./Label";


const InputForm = (props) =>{
    const{label,name, type,logo,variant} = props;
    return(
        <div className="input-box">
             <span className="icon"> <Icon  type={variant} logo={logo}></Icon></span>
            <Input type={type} name={name}></Input>
            <Label>{label}</Label>

        </div>
    );
}

export default InputForm;