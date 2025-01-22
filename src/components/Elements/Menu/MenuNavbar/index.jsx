import 'boxicons'
import Icon from "../../Icon";
import { Link } from 'react-router-dom';

const MenuNav = () =>{

    return(
        <div className="menu-icon">
        <div className="menu-nav">
        <a href="#">Kategori</a>
        <Link to="/" ><img src="./img/Avatar.png" alt=""></img></Link>
        </div>
        <div id="icon-navbar"><Icon  name="menu"></Icon></div>
    </div>
    );
}

export default MenuNav;