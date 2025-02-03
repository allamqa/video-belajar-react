import List from "../../List/List";
import 'boxicons';
import Icon from "../../Icon";

const MenuKategori = () => {
    return (
        <div className="footer-content menu-footer">
            <span className="icon"><Icon  type="solid" logo="chevron-right"></Icon></span>
            <List variant="title">Kategori</List>
            <List variant="list-footer">Digital Teknologi</List>
            <List variant="list-footer">Pemasaran</List>
            <List variant="list-footer">Manajemen Bisnis</List>
            <List variant="list-footer">Pengembangan Diri</List>
            <List variant="list-footer">Desain</List>
        </div>
    );
}

export default MenuKategori;
