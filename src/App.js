import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { Home, Works, About, Work } from "./pages";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.works} element={<Works />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.work} element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
