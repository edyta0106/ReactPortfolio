import React from "react";
import PageContainer from "./components/PageContainer";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <PageContainer />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
