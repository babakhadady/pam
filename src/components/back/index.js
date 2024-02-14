import { Link, useLocation } from "react-router-dom";

function Back() {
  let path = useLocation().pathname;
  path = path.substring(0, path.lastIndexOf("/"));
  if (!path) path += "/";
  if (path == "/work") path += "s";


  return (
    <Link
      style={{
        fontSize: "75px",
        textDecoration: "none",
        margin: "75px",
        display: "inline-block",
      }}
      to={path}>
      go back (send me the fking icon)
    </Link>
  );
}

export default Back;
