import "./App.css";
import Homepage from "./Homepage";
import AboutLittleLemon from "./AboutLittleLemon";
import Product from "./Product";
import { Routes, Route, Link } from "react-router-dom";

/* The use of React Router's <Link> and <Route> components ensures 
that the application behaves like a traditional multi-page website 
while actually still being a single-page application.
This setup allows to navigate between "Homepage" and "About" sections without triggering a page reload */
function App() {
  return (
    <div> 
	  <nav>
      {/* The <Link> component is used to create links that navigate to different routes in the application */}
      {/* The "to" predifined prop specifies the path to navigate to */}
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/about" className="nav-item">About Little Lemon</Link>
      <Link to="/product" className="nav-item">Our products</Link>
	  </nav>
      {/* The <Routes> component is used to define the different routes in the application */}
      <Routes> 
        {/* The <Route> component is used to define a specific route */}
        {/* The "path" prop specifies the URL path for the route */}
        {/* The "element" prop specifies the component to render when the route matches */}
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
    </div>
  );
};

export default App;
