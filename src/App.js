import React from "react";
import Header from "./components/Header";
import CabBookingForm from "./components/CabBookingForm";
import Label from "./components/label";
import "./App.css";
import Yatri from "./components/Yatri";
import Footer from "./components/Footer";
import News from "./components/News";
import End from "./components/End";

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <div className="banner">
          <h1>India's <span>Leading One-Way Inter-City</span> Cab Service Provider</h1>
        </div>
        <CabBookingForm />
      </main>

      <Label />
      <section>
      <Yatri />
      </section>
      <News/>
      <End/>
      <Footer />
    </div>
  );
}

export default App;
