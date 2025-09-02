import EducationBigScreen from "./education/big";
import EducationSmallScreen from "./education/Small";



export default function Education(){
    return(
    <div >
        <div className="hidden lg:flex lg:flex-col px-[14px] pb-20 sm:px-[30px] spacer layer3">
            <EducationBigScreen />
        </div>
        <div className="lg:hidden">
            <EducationSmallScreen/>
        </div>
    </div>
    )
}