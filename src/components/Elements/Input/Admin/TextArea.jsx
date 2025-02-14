const TextArea = ({value,name,handleInputChange,label}) =>{
    
    return(
        <div>
        <label className="block mb-2 font-semibold">{label}</label>
        <input type="text" onChange = {handleInputChange}  name={name}  value={value} className="w-full h-[5rem] p-2 border rounded"></input>
    </div>
    );
}

export default TextArea;