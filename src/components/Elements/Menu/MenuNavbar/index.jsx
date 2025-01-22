import 'boxicons'
import Icon from "../../Icon";

const MenuNav = () =>{

    return(
        <div className="menu-icon">
        <div className="menu-nav">
        <a href="#">Kategori</a>
        <a href="#"><img src="./img/Avatar.png" alt=""></img></a>
        </div>
        <div id="icon-navbar"><Icon  name="menu"></Icon></div>
    </div>
    );
}

export default MenuNav;