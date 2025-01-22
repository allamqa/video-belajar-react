const LabelJudul = (props) =>{
 const {judul,subjudul} = props;
    return(
        <div className="center-text">
        <h2>{judul}</h2>
        <p>{subjudul}</p>
    </div>
    );
}

export default LabelJudul;