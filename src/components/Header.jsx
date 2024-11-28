import profilePicture from "../assets/profile-picture.jpg";
import "../styles/Header.css"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
        <div className="header-jumbotron">
            <img src={profilePicture} style={{ borderRadius: "50%"}} alt="image-profile" />
            <h3>Hendra Kusuma</h3>
            <p>Programmer - Content Creator - Researcher</p>
            <div className="socialMedia">
              <Link to="https://www.instagram.com/hendra_abu_humaira_raihan/"><FaInstagram /></Link>
              <Link to="https://x.com/hendra___kusuma"><FaTwitter /></Link>
              <Link to="https://www.facebook.com/henzo.hoshi/"><FaFacebook /></Link>
            </div>
        </div>
    </header>
  )
}
