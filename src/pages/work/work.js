import { useParams } from "react-router-dom";
import Back from "../../components/back";
import  projects from "../../data/projects.json";

function Work() {
  const name = useParams().name;
  const project = projects.filter((curr) => (curr.name = name))[0];
  console.log(project);

  return (
    <div>
      <Back />
      {project.description && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}>
          {project.description.map((desc, idx) => {
            return idx === 0 ? (
              <span style={{ fontSize: "2vw", paddingBottom: "6px" }}>
                {desc}
              </span>
            ) : (
              <span style={{ padding: "2px" , fontSize:"1vw"}}>{desc}</span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Work;
