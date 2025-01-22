import LabelJudul from "../Elements/Label/LabelJudul";
import List from "../Elements/List/List";
import Card from "../Elements/Card";
const Course = () =>{
    
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
        <Card gambar="./img/course-1.jpg" harga="Rp.150.000" judul="Pemrograman Dasar" waktu="5 jam 23 menit"></Card>
        <Card gambar="./img/course-2.jpg" harga="Rp.250.000" judul="Pemrograman Javascript" waktu="4 jam 23 menit"></Card>
        <Card gambar="./img/course-3.jpg" harga="Rp.350.000" judul="Pemrograman Web" waktu="3 jam 23 menit"></Card>
        <Card gambar="./img/course-4.jpg" harga="Rp.450.000" judul="Laravel Dasar" waktu="2 jam 23 menit"></Card>
        <Card gambar="./img/course-5.jpg" harga="Rp.550.000" judul="HTML dan CSS" waktu="1 jam 23 menit"></Card>
        <Card gambar="./img/course-6.jpg" harga="Rp.650.000" judul="Database" waktu="6 jam 23 menit"></Card>
        </div>
        
    </section>
    );
}

export default Course;