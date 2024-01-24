import Loading from "@components/layout/Loading/Loading";
import Main from "@pages/main/Main";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";
import { AnimatePresence } from "framer-motion";
import Introduce from "@pages/introduce/Introduce";
import Skills from "@pages/skills/Skills";
import Portpolio from "@pages/portpolio/Portpolio";

function RouteComponent() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portpolio" element={<Portpolio />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Loading />
        <BrowserRouter>
          <Toaster position="top-center" reverseOrder={false} />
          <RouteComponent />
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
