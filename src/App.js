import { useState, useRef, Children, useEffect } from "react";
import "./App.css";
import qrCode from "./data/qrcode.png";
import projectsJson from "./data/projects.json";

function App() {
  const [projects, setProjects] = useState([{ name: "" }, ...projectsJson]);

  useEffect(() => {
    console.log(projects[0]);
  }, [projects]);

  const ref = useRef(null);
  function onScroll(event) {
    setProjects((prev) => {
      return event.deltaY > 0
        ? [...prev.slice(1), prev[0]]
        : [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
    });
  }

  return (
    <div onWheel={onScroll}>
      <div className="bodyContainer">
        <img
          src={qrCode}
          width={100}
          height={100}
          style={{ backgroundColor: "white" }}
        />
        <span>pamath</span>
        <div className="projectContainer" ref={ref}>
          {projects.map((project, index) => (
            <span
              style={{
                fontWeight: index === 0 ? 700 : 200,
                fontSize: `${(1 - index / projects.length) * 2}vw`,
                opacity: `${(1 - index / projects.length + 0.1) * 100}%`,
                ...(index === 0 && {
                  padding: "5vh",
                  transform: "scale(1.65)",
                }),
              }}>
              {project.name}
            </span>
          ))}
        </div>
      </div>
      {projects[0].name && (
        <div className="background">
          {projects[0].images &&
            projects[0].images.map((img) => {
              console.log(img);
              return <img src={img} height={700} style={{ padding: "30px" }} />;
            })}
          {projects[0].description && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "30px",
              }}>
              {projects[0].description.map((desc, idx) => {
                return idx === 0 ? (
                  <span style={{ fontSize: "25px", paddingBottom: "6px" }}>
                    {desc}
                  </span>
                ) : (
                  <span style={{ padding: "2px" }}>{desc}</span>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
