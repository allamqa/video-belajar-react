import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

import '../login.css'

const LoginPage = () =>{
    
    return(
       <AuthLayouts variant ="wrapper-login" title="Masuk Ke Akun" subtitle="Yuk, lanjutin belajarmu di videobelajar">
        <FormLogin></FormLogin>
       </AuthLayouts>
    );
}

export default LoginPage;