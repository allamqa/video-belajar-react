import MenuKategori from "../Elements/Menu/MenuFooter/MenuKategori";
import MenuKomunitas from "../Elements/Menu/MenuFooter/MenuKomunitas";
import MenuPerusahaan from "../Elements/Menu/MenuFooter/MenuPerusahaan";
import MenuProfile from "../Elements/Menu/MenuFooter/MenuProfile";
import Copyright from "../Elements/Copyright";


const Footer = () =>{
    
    return(
   
        <footer>
        <div className="main-footer">
            <MenuProfile></MenuProfile>
            <MenuKategori></MenuKategori>
            <MenuPerusahaan></MenuPerusahaan>
            <MenuKomunitas></MenuKomunitas>
        </div>
        <hr/>
       <Copyright></Copyright>
        </footer>
  
    );
}

export default Footer;