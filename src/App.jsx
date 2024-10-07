import { BrowserRouter } from "react-router-dom";

import { WorksProvider } from "./context";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <WorksProvider>
      <div className="container">
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </div>
    </WorksProvider>
  );
}

export default App;
