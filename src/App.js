import logo from "./logo.svg";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackData from "./data/feedbackdata";
import Feedbacklist from "./components/Feedbcklist";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./components/context/FeedbackContext";
import "./App.css";


function App() {

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
        <Route exact path="/" element = {
          <>
                        <FeedbackForm  />
                        <FeedbackStats />
                        <Feedbacklist  />
          </>
        }>

        </Route>
     
      <Route path="/about" element={<AboutPage />} />
      </Routes>
      <AboutIconLink />
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
