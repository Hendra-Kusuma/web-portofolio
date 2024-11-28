import profilePicture from "../assets/profile-picture.jpg";
import "../styles/Header.css"
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture} style={{ borderRadius: "50%"}} alt="image-profile" />
            <h3>Hendra Kusuma</h3>
            <p>Programmer - Content Creator - Researcher</p>
            <div className="socialMedia">
              <a href=""><FaInstagram /></a>
              <a href=""><FaTiktok /></a>
              <a href=""><FaTwitter /></a>
              <a href=""><FaFacebook /></a>
            </div>
            
        </div>
    </header>
  )
}
