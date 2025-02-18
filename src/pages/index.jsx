import { useEffect } from "react";
import HomeLayouts from "../components/Layouts/HomeLayouts"
import '../index.css'
import { fetchDataCall } from "../service/products.service";




const HomePage = () =>{
    useEffect(() => {
        const checkLocalStorage = async () => {
            const storedProducts = localStorage.getItem('product');
            if (!storedProducts) {
                try {
                    const products = await fetchDataCall();
                    localStorage.setItem('product', JSON.stringify(products));
                } catch (error) {
                    console.error("Error fetching and storing products:", error);
                }
            }
        };
        
        checkLocalStorage();
    }, []);

    return(
       <HomeLayouts></HomeLayouts>
    );
}


export default HomePage;
