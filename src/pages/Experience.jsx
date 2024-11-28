import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { RiNextjsFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScroolToTop from "../components/ScroolToTop";

function Experience() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - present"
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<RiNextjsFill />}
          >
            <h3 className="vertical-timeline-element-title">Fullstack Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Depok, Jawa Barat
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: "#3f51b5", color: "#fff" }}
            icon={<FaVuejs />}
          >
            <h3 className="vertical-timeline-element-title">Front End Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Depok, Jawa Barat
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021-2022"
            iconStyle={{ background: "#AA392D", color: "#fff" }}
            icon={<FaLaravel />}
          >
            <h3 className="vertical-timeline-element-title">Back End Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Depok, Jawa Barat
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer/>
      <ScroolToTop/>
    </>
  );
}

export default Experience;
