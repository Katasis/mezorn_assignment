import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function SocialLinks(){
    return(
        <div className="flex justify-center gap-x-6 h-12">
            <button className="text-xl"><FaFacebook/></button>
            <button className="text-xl"><FaInstagram/></button>
            <button className="text-xl"><FaTwitter/></button>

        </div>
    )
}

export default SocialLinks;