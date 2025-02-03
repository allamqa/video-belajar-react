import InputForm from "../Elements/Input";
import LabelRemember from "../Elements/Label/LabelRemember";
import ButtonForm from "../Elements/Button";
import Icon from "../Elements/Icon";

const FormLogin = () =>{

    const handleLogin = (event) =>{
        event.preventDefault();
        const loginData = {
            email: event.target.email.value,
            password: event.target.password.value
          };
         localStorage.setItem('loginData', JSON.stringify(loginData));
        window.location.href="/home";
    };
    
    return(
        <form onSubmit={handleLogin}>
                <InputForm logo="envelope" name="email" variant="solid" type="mail" label="Email"></InputForm>
                <InputForm logo="lock-alt" name="password" variant="solid" type="password" label="Password"></InputForm>
                <LabelRemember></LabelRemember>
                <ButtonForm  variant="btn-login">Masuk</ButtonForm>
                <ButtonForm variant="btn-register">Daftar</ButtonForm>
                <p>atau</p>
                <ButtonForm variant="btn-login-google" type="submit"><span className="icon"><Icon  type="logo" logo="google-plus" color="red"></Icon></span>Masuk dengan Google</ButtonForm>
            </form>
    );
}

export default FormLogin;