import Icon from "../Icon";
import Input from "./Input";
import Label from "./Label";


const InputForm = (props) =>{
    const{label, type,name,variant} = props;
    return(
        <div className="input-box">
             <span className="icon"> <Icon  type={variant} name={name}></Icon></span>
            <Input type={type}></Input>
            <Label>{label}</Label>

        </div>
    );
}

export default InputForm;