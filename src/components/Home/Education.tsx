import EducationBigScreen from "./education/big";
import EducationSmallScreen from "./education/Small";



export default function Education(){
    return(
    <div>
        <div className="hidden lg:flex lg:flex-col">
            <EducationBigScreen/>
        </div>
        <div className="lg:hidden">
            <EducationSmallScreen/>
        </div>
    </div>
    )
}