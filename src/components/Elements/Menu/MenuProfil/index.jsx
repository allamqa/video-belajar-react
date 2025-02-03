import Icon from "../../Icon";

const MenuProfil = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/4">
            <h2 className="text-xl font-semibold mb-2">Ubah Profil</h2>
            <p className="text-gray-500 mb-4">Ubah data diri Anda</p>
            <div className="space-y-4">
                <a href="#" className="flex items-center w-full p-2 text-gray-500 border border-yellow-400 bg-yellow-100 text-yellow-600 rounded-lg flex gap-2 items-center">
                <Icon color="orange" type="solid" logo="user"></Icon> Profil Saya
                </a>
                <a href="#" className="flex items-center w-full p-2 text-gray-500 flex gap-2 items-center ">
                <Icon color="gray" type="solid" logo="book"></Icon> Kelas Saya
                </a>
                <a href="#" className="flex items-center w-full p-2 text-gray-500 flex gap-2 items-center ">
                <Icon color="gray" type="solid" logo="basket"></Icon> Pesanan Saya
                </a>
            </div>
        </div>
    );
}


export default MenuProfil;
