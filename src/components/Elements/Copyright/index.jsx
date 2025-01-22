import Label from "../Input/Label"
import 'boxicons'
import Icon from "../Icon";
const Copyright = () =>{
    
    return(
        
        <>
        <div className="copyrigth">
        <Label variant="label-footer">@2023 Gerobak Sayur All Rights Reserved</Label>
        <div className="footer-icon">
               <Icon  type="logo" name="linkedin"></Icon>
               <Icon  type="logo" name="facebook"></Icon>
               <Icon  type="logo" name="instagram"></Icon>
               <Icon  type="logo" name="twitter"></Icon>
           </div>
           </div>
        </>
    );
}

export default Copyright;