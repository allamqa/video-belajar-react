import Icon from "../Icon"
import 'boxicons'
const Card = (props) =>{
    const {gambar,harga,judul,waktu} = props;
    return(
        
             <div className="row">
                <img src={gambar} alt=""></img>
                <div className="course-text">
                    <h5>{harga}</h5>
                    <h3>{judul}</h3>
                    <h6>{waktu}</h6>
                    <div className="rating">
                        <div className="star">
                            <a href="#"><Icon color="#f66962" type="solid" logo="star"></Icon></a>
                            <a href="#"><Icon color="#f66962" type="solid" logo="star"></Icon></a>
                            <a href="#"><Icon color="#f66962" type="solid" logo="star"></Icon></a>
                            <a href="#"><Icon color="#f66962" type="solid" logo="star"></Icon></a>
                            <a href="#"><Icon color="#f66962" type="solid" logo="star"></Icon></a>
                        </div>
                        <div className="review">
                            <p>5 Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
    
    );
}

export default Card;