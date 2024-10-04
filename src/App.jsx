import AnimatedOutlet from "./components/AnimatedOutlet";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <div className="container">
        <AnimatedOutlet />
      </div>
    </SmoothScroll>
  );
}

export default App;
