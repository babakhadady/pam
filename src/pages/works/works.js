import { useState, useRef, useEffect } from "react";
import "./style.css";
import projectsJson from "../../data/projects.json";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { AnimatePresence, motion, useSpring } from "framer-motion";
import Back from "../../components/back";

function Works() {
  const [projects, setProjects] = useState(projectsJson);
  const [scrolled, setScrolled] = useState(false);
  const maxScrollHeight = document.body.clientHeight / 5;
  const selectedThreshhold = (maxScrollHeight * 2) / (projects.length - 1);

  const [scrollAmount, setScrollAmount] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [selected, setSelected] = useState(0);

  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setSelected(
      Math.floor((scrollAmount + Math.abs(scrollAmount)) / selectedThreshhold)
    );
    console.log(selectedThreshhold);
    console.log(Math.floor(scrollAmount) + scrollAmount);
  }, [scrollAmount]);

  function onScroll(event) {
    setScrollAmount((prev) => {
      if ((prev >= maxScrollHeight || prev < 0) && prev * event.deltaY > 0)
        return prev;

      return event.deltaY > 0
        ? Math.max(prev + event.deltaY / 3, -maxScrollHeight) // down
        : Math.min(prev + event.deltaY / 3, maxScrollHeight); // up
    });

    setScrollDirection(event.deltaY < 0 ? "up" : "down");
    // if (scrolled || Math.abs(event.deltaY) < 5) return;
    // setScrolled(true);
    // setProjects((prev) => {
    //   return event.deltaY > 0
    //     ? [...prev.slice(1), prev[0]]
    //     : [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
    // });
    // setTimeout(() => setScrolled(false), 200);
  }

  function isSelected(idx) {
    console.log(idx);
    console.log(maxScrollHeight + scrollAmount);

    return (
      scrollAmount + Math.abs(scrollAmount) < (idx + 1) * selectedThreshhold
    );
  }

  return (
    <div onWheel={onScroll}>
      <Back />
      <div className="bodyContainer">
        <div className="projectContainer" ref={ref}>
          <AnimatePresence>
            {projects.map((project, idx) => (
              <motion.span
                className="worksProjectTitle"
                key={`work-${idx}`}
                onClick={() =>
                  navigate(
                    routes.work.substring(0, routes.work.lastIndexOf(":")) +
                      project.name
                  )
                }
                style={{
                  fontWeight: idx === selected ? 700 : 200,
                  // fontSize: `${(1 - index / projects.length) * 2}vw`,
                  // opacity: `${(1 - idx / projects.length + 0.1) * 100}%`,
                  // ...(idx === 0 && {}),
                }}
                animate={{
                  y: scrollAmount,
                }}
                transition={{
                  ease: "easeIn",
                  duration:
                    ((scrollDirection === "up"
                      ? idx
                      : projects.length - 1 - idx) +
                      4) /
                    5,
                  // delay: idx / 20,
                  type: "spring",
                }}>
                {project.name}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>
      </div>
      {projects[selected].name && (
        <div className="worksBackground">
          {projects[selected].images &&
            projects[selected].images.map((img, idx) => {
              return <img src={img} height="1500px" />;
            })}
        </div>
      )}
    </div>
  );
}

export default Works;
