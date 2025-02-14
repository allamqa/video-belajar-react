const InputFormAdmin = ({label,type,name,value,handleInputChange}) =>{
    
    return(
        <div>
        <label className="block mb-2 font-semibold">{label}</label>
        <input onChange = {handleInputChange} type={type} name={name} value={value} className="w-full p-2 border rounded"></input>
    </div>
    );
}

export default InputFormAdmin;