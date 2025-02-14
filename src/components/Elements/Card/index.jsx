import Icon from "../Icon"
import 'boxicons'
const Card = ({product}) =>{
   
    return(
        
             <div className="row">
                <img src={product.thumbnail} alt=""></img>
                <div className="course-text">
                    <h5>{product.title}</h5>
                    <h3>{`$ ${product.price}`}</h3>
                    <h6>{product.description}</h6>
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