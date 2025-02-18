import { useEffect, useState } from "react";
import Card from "../Elements/Card";
import LabelJudul from "../Elements/Label/LabelJudul";
import List from "../Elements/List/List";
import Pagination from "../../pagination";
import { fetchDataCall } from "../../service/products.service";



const Course = () =>{
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(9);

    const getData = async () => {
        try {
          const response = await fetchDataCall();
          console.log(response);
         
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() => {
        const storedProducts = localStorage.getItem('product');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
        getData();
    }, []);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = products.slice(firstPostIndex, lastPostIndex);

   
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
        <div className="course-content flex justify-center">
            {currentPosts.map((item,index)=> (
                <Card product={item} key={index}/>
            ))}
           
        </div>
        <Pagination totalPost={products.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} ></Pagination>
        
    </section>
    );
}

export default Course;
