import InputProfil from "./Input";
import { useEffect, useState } from "react";

const FormProfil = () => {
    const [dataProfil, setDataProfil] = useState({
        fullName: "",
        email: "",
        countryCode: "",
        phone: "",
        profilePicture: "public/img/avatar2.png", 
    });

    useEffect(() => {
        const storedLoginData = localStorage.getItem("loginData");
        if (storedLoginData) {
            const { email } = JSON.parse(storedLoginData);
            setDataProfil((prevData) => ({ ...prevData, email }));
        }

        const storedProfile = localStorage.getItem("userProfile");
        if (storedProfile) {
            const { dataProfil: storedDataProfil } = JSON.parse(storedProfile);
            setDataProfil((prevData) => ({ ...prevData, ...storedDataProfil }));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDataProfil((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
               
                setDataProfil((prevData) => ({ ...prevData, profilePicture: reader.result })); 
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        localStorage.setItem("userProfile", JSON.stringify({ dataProfil }));
        
       
        window.dispatchEvent(new Event('storage'));
        alert("Data Berhasil di ubah!")
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-3/4">
            <div className="flex items-center space-x-4 mb-6">
                <img src={dataProfil.profilePicture} alt="Profile" className="w-24 h-24 rounded-full object-cover" />
                <div>
                    <h3 className="text-xl font-semibold" >{dataProfil.fullName}</h3>
                    <p className="text-gray-500">{dataProfil.email}</p>
                    <button 
                        onClick={() => document.getElementById('fileInput').click()} 
                        className="text-red-500 mt-2"
                    >
                        Ganti Foto Profil
                    </button>
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleFileChange} 
                        className="hidden" 
                        id="fileInput" 
                    />
                </div>
            </div>
            <div className="space-y-1">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <InputProfil width="md:w-3/4" name="fullName" value={dataProfil.fullName} type="text" placeholder="Nama Lengkap" label="Nama Lengkap" handleInputChange={handleInputChange} />
                        <InputProfil width="md:w-3/4" name="email" value={dataProfil.email} type="email" placeholder="Email" label="Email" handleInputChange={handleInputChange} />
                        <InputProfil width="md:w-1/4" name="countryCode" value={dataProfil.countryCode} type="number" placeholder="+62" label="Kode Telp" handleInputChange={handleInputChange} />
                        <InputProfil width="md:w-2/4" name="phone" value={dataProfil.phone} type="telp" placeholder="Nomor Telephone" label="No.Hp" handleInputChange={handleInputChange} />
                    </div>
                    <div className="md:flex justify-end">
                        <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded-lg mt-4 flex justify-center items-center md:w-[15%]">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormProfil;
