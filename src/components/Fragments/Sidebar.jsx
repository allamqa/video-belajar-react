const Sidebar = () =>{
    
    return(
        <aside className="w-full md:w-1/5 bg-white p-4 md:p-6">
        <div className="text-2xl font-bold text-orange-500 mb-8">
            <span className="text-yellow-500">video</span>belajar
        </div>
        <nav>
        <div className="space-y-4">
<a href="#" className="flex items-center w-full p-2 text-gray-500  flex gap-2 items-center">
 Dashboard
</a>
<a href="#" className="flex items-center w-full p-2 text-gray-500 flex gap-2 items-center border border-yellow-400 bg-yellow-100 text-yellow-600 rounded-lg">
Products
</a>
<a href="#" className="flex items-center w-full p-2 text-gray-500 flex gap-2 items-center ">
 User
</a>
</div>
        </nav>
    </aside>
    );
}

export default Sidebar;