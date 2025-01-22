import InputForm from "../Elements/Input";
import LabelRemember from "../Elements/Label/LabelRemember";
import ButtonForm from "../Elements/Button";
import Icon from "../Elements/Icon";
const FormRegister = () =>{
    
    return(
        <form action="">
                <InputForm name="user" variant="solid" type="text" label="Nama Lengkap"></InputForm>
                <InputForm name="envelope" variant="solid" type="mail" label="Email"></InputForm>
                <InputForm name="phone" variant="solid" type="tel" label="No Hp"></InputForm>
                <InputForm name="lock-alt" variant="solid" label="Password"></InputForm>
                <InputForm name="lock-alt" variant="solid" label="Konfirmasi Password"></InputForm>
                <LabelRemember></LabelRemember>
                <ButtonForm variant="btn-login">Daftar</ButtonForm>
                <ButtonForm variant="btn-register">Masuk</ButtonForm>
                <p>atau</p>
                <ButtonForm variant="btn-login-google"><span className="icon"><Icon  type="logo" name="google-plus" color="red"></Icon></span>Daftar dengan Google</ButtonForm>
            </form>
    );
}

export default FormRegister;