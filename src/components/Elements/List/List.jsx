const List = (props) =>{
    const{children,variant} = props;
    return(
        
                <li><a href="#" className={variant}>{children}</a></li>
      
    );
}

export default List;