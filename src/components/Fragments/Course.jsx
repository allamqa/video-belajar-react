import { fetchDataCall } from "../../service/products.service";
import Card from "../Elements/Card";
import LabelJudul from "../Elements/Label/LabelJudul";
import List from "../Elements/List/List";
import { useEffect, useState } from "react";



const Course = () =>{

    const [dataProducts,setDataProducts]= useState([]);
    const fetchData = async () => {
       
      const data = await fetchDataCall();
      setDataProducts(data);
       };
    

    useEffect(() => {
        fetchData();
    }, []);
    
   
    return(
    <section className="course" id="course">
        <LabelJudul judul="Koleksi Video Pembelajaran Unggulan" subjudul="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"></LabelJudul>
        <div className="kategori">
            <ul>
        <List>Semua Kelas</List>
        <List>Pemasaran</List>
        <List>Desain</List>
        <List>Pengembangan Diri</List>
        <List>Bisnis</List>
        </ul>
        </div>
        <div className="course-content">
            {dataProducts.map((item,index)=> (
                <Card product={item} key={index}/>
            ))}
        </div>
        
        
    </section>
    );
}

export default Course;