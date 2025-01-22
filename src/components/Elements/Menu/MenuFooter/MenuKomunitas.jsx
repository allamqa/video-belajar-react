import List from "../../List/List";
import 'boxicons'
import Icon from "../../Icon";
const MenuKomunitas = () =>{
    
    return(
        
        <div className="footer-content menu-footer">
        <span className="icon"><Icon type="solid" name="chevron-right"></Icon></span>
        <List variant="title">Komunitas</List>
        <List variant="list-footer">Blog</List>
    </div>
      
    );
}

export default MenuKomunitas;