import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Ques from "./components/Ques"
import Contact from "./components/Contact"
import About from "./components/About"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ques" element={<Ques/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
