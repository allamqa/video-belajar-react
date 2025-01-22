import InputForm from "../Elements/Input";
import LabelRemember from "../Elements/Label/LabelRemember";
import ButtonForm from "../Elements/Button";
import Icon from "../Elements/Icon";

const FormLogin = () =>{
    
    return(
        <form action="">
                <InputForm name="envelope" variant="solid" type="mail" label="Email"></InputForm>
                <InputForm name="lock-alt" variant="solid" type="password" label="Password"></InputForm>
                <LabelRemember></LabelRemember>
                <ButtonForm link="/home" variant="btn-login">Masuk</ButtonForm>
                <ButtonForm link="/register" variant="btn-register">Daftar</ButtonForm>
                <p>atau</p>
                <ButtonForm variant="btn-login-google"><span className="icon"><Icon  type="logo" name="google-plus" color="red"></Icon></span>Masuk dengan Google</ButtonForm>
            </form>
    );
}

export default FormLogin;