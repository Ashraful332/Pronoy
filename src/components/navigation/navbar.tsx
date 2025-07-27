import Image from "next/image";
import Logo from "../../assets/icon.png";

export default function NaveBar() {
      return (
            <div>
                  <div>
                        <p>Home</p>
                        <p>About me</p>
                        <p>Work</p>
                        <p>Photos</p>
                        <p>contact</p>
                  </div>
                  <div>
                        <Image src={Logo} alt="logo" />
                  </div>
                  <div></div>
            </div>
      )
}