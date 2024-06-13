import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/pages/SignIn";
import LearnHooks from "./components/modules/LearnHooks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/learnhooks" element={<LearnHooks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
