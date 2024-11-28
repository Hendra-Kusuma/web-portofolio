import '../styles/About.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiPostgresql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";

function About() {
  return (
    <section id='about'>
        <div className="wrapper">
            <h3>About</h3>
            <p>wadidaw wadidaw Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam placeat doloribus deserunt harum ex quidem nam doloremque ea repellendus voluptate!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae veritatis recusandae iure, obcaecati pariatur autem. </p>
            <h4>Programming Language & Tools</h4>
            <div className='skills'>
                <FaHtml5 />
                <FaCss3Alt />
                <IoLogoJavascript />
                <FaPhp /> 
                <FaLaravel />
                <GrMysql />
                <SiPostgresql />
                <FaNodeJs />
                <FaGithub />
                <FaPython />
            </div>
        </div>
    </section>
  )
}

export default About