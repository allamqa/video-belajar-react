import Navbar from "../Fragments/Navbar";
import LogoNav from "../Elements/Logo";
// import MenuNav from "../Elements/Menu/MenuNavbar";
import Hero from "../Fragments/Hero"
import Course from "../Fragments/Course";
import Cta from "../Fragments/Cta";
import Footer from "../Fragments/Footer";
const HomeLayouts = () =>{
    return(
        <div id="home-page">
        <Navbar>
            <LogoNav></LogoNav>
            {/* <MenuNav></MenuNav> */}
        </Navbar>
        <Hero></Hero>
        <Course></Course>
        <Cta></Cta>
        <Footer></Footer>
    </div>
    );
}

export default HomeLayouts;