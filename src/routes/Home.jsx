import { useContext } from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Works from "../components/Works";
import About from "../components/About";
import Loader from "../components/Loader";
import AnimatedLayout from "../components/AnimatedLayout";
import { WorksContext } from "../context";

const Home = () => {
  const { loader } = useContext(WorksContext);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <AnimatedLayout>
          <>
            <Nav />
            <div className="page-container home">
              <Hero />
              <Works />
              <About />
            </div>
          </>
        </AnimatedLayout>
      )}
    </>
  );
};

export default Home;
