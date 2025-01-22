import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import '../register.css'


const RegisterPage = () =>{
    
    return(
       <AuthLayouts variant="wrapper-register" title="Pendaftaran Akun" subtitle="Yuk, daftarkan akunmu sekarang juga!">
       <FormRegister></FormRegister>
       </AuthLayouts>
    );
}

export default RegisterPage;