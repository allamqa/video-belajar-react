import Navbar from "../Fragments/Navbar";
import LogoNav from "../Elements/Logo";
const AuthLayouts = (props) =>{
    const {children,title,subtitle,variant} = props;
    return(
        <div id="auth-page">
        <Navbar>
            <LogoNav></LogoNav>
        </Navbar>
        <div className={variant}>
        <div className="form-box login">
            <h2>{title}</h2>
            <p>{subtitle}</p>
        {children}
        </div>
    </div>
    </div>
    );
}

export default AuthLayouts;