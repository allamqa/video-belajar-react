import List from "../../List/List";
import 'boxicons';
import Icon from "../../Icon"

const MenuPerusahaan = () => {
    return (
        <div className="footer-content menu-footer">
            <span className="icon"><Icon  type="solid" logo="chevron-right"></Icon></span>
            <List variant="title">Perusahaan</List>
            <List variant="list-footer">Tentang Kami</List>
            <List variant="list-footer">FAQ</List>
            <List variant="list-footer">Kebijakan Privasi</List>
            <List variant="list-footer">Ketentuan Layanan</List>
            <List variant="list-footer">Bantuan</List>
        </div>
    );
}

export default MenuPerusahaan;
