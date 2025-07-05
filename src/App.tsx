import React from "react";
import { MainPage } from "./Pages/MainPage/MainPage";
import { Header } from './Components/Header/Header'
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage />
    </div>
  );
}

export default App;
