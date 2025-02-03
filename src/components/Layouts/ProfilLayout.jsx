import Navbar from "../Fragments/Navbar";
import LogoNav from "../Elements/Logo";
import MenuNav from "../Elements/Menu/MenuNavbar";
import Footer from "../Fragments/Footer";
import ProfilForm from "../Fragments/Profil";
const ProfilLayout = () =>{
    return(
        <div id="home-page">
        <Navbar>
            <LogoNav></LogoNav>
            <MenuNav></MenuNav>
        </Navbar>
        <ProfilForm></ProfilForm>
        <Footer></Footer>
    </div>
    );
}

export default ProfilLayout;