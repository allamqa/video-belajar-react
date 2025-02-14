import InputProfil from "./Input";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateToProfile } from "../../../../redux/slices/profileSlices"; // Importing the updateToProfile action
import { useState } from "react";

const FormProfil = () => {
  const profile = useSelector((state) => state.profile.data);
  const dispatch = useDispatch();
  const [dataProfile, setDataProfile] = useState(profile);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedProfile = { ...dataProfile, profilePicture: reader.result };
        setDataProfile(updatedProfile);
        dispatch(updateToProfile(updatedProfile));
        localStorage.setItem("profile", JSON.stringify(updatedProfile));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedInput = { ...dataProfile, [name]: value };
    setDataProfile(updatedInput);
    dispatch(updateToProfile(updatedInput));
    localStorage.setItem("profile", JSON.stringify(updatedInput));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfile = { ...dataProfile };
    dispatch(updateToProfile(updatedProfile));
    localStorage.setItem("profile", JSON.stringify(updatedProfile));
    alert("Data Berhasil di ubah!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-3/4">
      <div className="flex items-center space-x-4 mb-6">
        <img src={dataProfile.profilePicture} alt="Profile" className="w-24 h-24 rounded-full object-cover" />
        <div>
          <h3 className="text-xl font-semibold">{dataProfile.fullName}</h3>
          <p className="text-gray-500">{dataProfile.email}</p>
          <button onClick={() => document.getElementById('fileInput').click()} className="text-red-500 mt-2">
            Ganti Foto Profil
          </button>
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="fileInput" />
        </div>
      </div>
      <div className="space-y-1">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <InputProfil width="md:w-3/4" name="fullName" value={profile.fullName} type="text" placeholder="Nama Lengkap" label="Nama Lengkap" handleInputChange={handleInputChange} />
            <InputProfil width="md:w-3/4" name="email" value={profile.email} type="email" placeholder="Email" label="Email" handleInputChange={handleInputChange} />
            <InputProfil width="md:w-1/4" name="countryCode" value={dataProfile.countryCode} type="number" placeholder="+62" label="Kode Telp" handleInputChange={handleInputChange} />
            <InputProfil width="md:w-2/4" name="phone" value={dataProfile.phone} type="telp" placeholder="Nomor Telephone" label="No.Hp" handleInputChange={handleInputChange} />
          </div>
          <div className="md:flex justify-end">
            <button type="submit" className="w-full bg-green-500 text-white px-4 py-2 rounded-lg mt-4 flex justify-center items-center md:w-[15%]">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormProfil;