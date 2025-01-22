const Navbar = (props) =>{
    const {children} = props;
    return(
        <header>
        {children}
        </header>
    );
}

export default Navbar;