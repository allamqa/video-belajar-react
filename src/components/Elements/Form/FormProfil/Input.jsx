const InputProfil = (props) =>{
    const {type,placeholder,label,width,name,value,handleInputChange} = props;
    return(
        <div className={`w-full my-2 ${width}`}>
            <label className="block text-sm font-semibold text-gray-500 mb-2">{label}</label>
            <input type={type} placeholder={placeholder} name={name} value={value}  onChange={handleInputChange} className="w-full p-2 border border-gray-500 rounded-lg"/>
        </div>
    );
}

export default InputProfil;