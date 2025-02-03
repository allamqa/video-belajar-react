
import FormProfil from "../Elements/Form/FormProfil";
import MenuProfil from "../Elements/Menu/MenuProfil";

const ProfilForm = () =>{

    
    
    return(
        <>
        <div className="my-[70px] flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 md:my-[80px] mx-auto  w-[80%]" >
            <MenuProfil></MenuProfil>
            <FormProfil></FormProfil>
        </div>
        </>
    );
}

export default ProfilForm;