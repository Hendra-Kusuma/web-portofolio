import { useParams, Navigate } from "react-router-dom";
import "../styles/DetailPortofolio.css";
import { portofolioList } from "../data/DataPortfolio";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScroolToTop from "../components/ScroolToTop";

function DetailPortofolio() {
  const { id } = useParams();
  const data = portofolioList.find((item) => item.id === id);
  if(data == undefined){
    return <Navigate to="/page-not-found" />
  } 
  return (
    <>
      <Navbar />
      <section id="detail-portfolio">
        <div className="wrapper">
          <h3>{data.title}</h3>
          <img src={data.image} alt="image" />
          <p className="skill"><b>Skill : </b>{data.skill}</p>
        </div>
      </section>
      <Footer />
      <ScroolToTop />
    </>
  );
}

export default DetailPortofolio;
