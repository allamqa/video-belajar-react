import Label from "../Input/Label"
import 'boxicons'
import Icon from "../Icon";
const Copyright = () =>{
    
    return(
        
        <>
        <div className="copyrigth">
        <Label variant="label-footer">@2023 Gerobak Sayur All Rights Reserved</Label>
        <div className="footer-icon">
            <Icon  type="logo" logo="linkedin"></Icon>
            <Icon  type="logo" logo="facebook"></Icon>
            <Icon  type="logo" logo="instagram"></Icon>
            <Icon  type="logo" logo="twitter"></Icon>
           </div>
           </div>
        </>
    );
}

export default Copyright;