import { Link } from "react-router-dom";
import "./style.css";
import { routes } from "../../routes";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <span className="name">pamath</span>
      <div
        style={{
          position: "absolute",
          display: "flex",
          top: "5%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}>
        <Link to={routes.works} className="pageLink">
          <span>works</span>
        </Link>
        <Link to={routes.about} className="pageLink">
          <span>about</span>
        </Link>
        <a className="pageLink" href="mailto:pamath.work@gmail.com">contact</a>
      </div>
    </div>
  );
}

export default Home;
