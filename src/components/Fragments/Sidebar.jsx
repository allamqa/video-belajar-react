import { Link } from "react-router-dom";
import LogoNav from "../Elements/Logo";

const Sidebar = () =>{
    
   

    return(
        <aside className="w-full md:w-1/5 bg-white p-4 md:p-6">
        <div className="text-2xl font-bold text-orange-500 mb-8">
            <LogoNav></LogoNav>
        </div>
        <nav>
        <div className="space-y-4">

<Link to="#" className="flex items-center w-full p-2 text-gray-500 flex gap-2 items-center border border-yellow-400 bg-yellow-100 text-yellow-600 rounded-lg">
Products
</Link>
<Link to="/home" className="flex items-center w-full p-2 text-gray-500 flex gap-2 items-center active:border active:border-yellow-400 active:bg-yellow-100 active:text-yellow-600 active:rounded-lg">
 Home
</Link>
</div>
        </nav>
    </aside>
    );
}

export default Sidebar;