import { Link, Outlet, ReactLocation, Router } from "@tanstack/react-location";
import { routes } from "./routes";
import "./index.css";

function App() {
  const location = new ReactLocation();

  return (
    <div>
      <Router routes={routes} location={location}>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About </Link>
          <h1 className="bg-red-500">Hello world!</h1>
        </div>
        <div>
          <Outlet />
        </div>
      </Router>
    </div>
  );
}

export default App;
