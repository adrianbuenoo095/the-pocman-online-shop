import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/common/Footer';
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LogInPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
