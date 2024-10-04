import { useState } from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Works from "../components/Works";
import About from "../components/About";
import Loader from "../components/Loader";
import AnimatedLayout from "../components/AnimatedLayout";

const Home = () => {
  const [loader, setLoader] = useState(true);

  return (
    <>
      {loader ? (
        <Loader setLoader={setLoader} />
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
