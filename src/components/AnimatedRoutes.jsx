import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../routes/Home";
import Gallery from "../routes/Gallery";
import Error from "./Error";
import SmoothScroll from "./SmoothScroll";
import Slider from "../routes/Slider";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <SmoothScroll>
      <AnimatePresence mode="wait" initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" errorElement={<Error />}>
            <Route path="/" element={<Home />} />
            <Route path="/works/:id" element={<Gallery />} />
            <Route path="/works/:id/slider" element={<Slider />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </SmoothScroll>
  );
};

export default AnimatedRoutes;
