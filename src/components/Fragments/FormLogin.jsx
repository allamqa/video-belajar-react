import InputForm from "../Elements/Input";
import LabelRemember from "../Elements/Label/LabelRemember";
import ButtonForm from "../Elements/Button";
import Icon from "../Elements/Icon";
import { useDispatch} from "react-redux";
import { addToProfile } from "../../redux/slices/profileSlices";

const FormLogin = () =>{
   
    const dispatch = useDispatch();

    const handleLogin = (event) =>{
        event.preventDefault();
        const loginData = {
            email: event.target.email.value,
            password: event.target.password.value,
            profilePicture : "public/img/avatar.png"
          };
          localStorage.setItem("profile", JSON.stringify(loginData));
         dispatch(addToProfile(loginData));
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