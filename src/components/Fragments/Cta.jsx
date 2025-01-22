import ButtonForm from "../Elements/Button"
import Input from "../Elements/Input/Input"
const Cta = () =>{
    
    return(
        <section className="cta">
        <h2>NEWSLETTER</h2>
        <h1>Mau Belajar Lebih Banyak?</h1>
        <p>Daftarkan dirimu untuk mendapatkan informasi terbaru dan <br/> penawaran spesial dari program-program terbaik hariesok.id</p>
        <div className="form-email">
           <Input type="text" placeholder="Masukkan Emailmu"></Input>
            <ButtonForm variant="btn-email">Subscribe</ButtonForm>
        </div>
    </section>
    );
}

export default Cta;