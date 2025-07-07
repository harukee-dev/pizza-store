import React from 'react'
import { Header } from './Components/Header/Header'
import { Footer } from "./Components/Footer/Footer";
import { ErrorPage } from './Pages/ErrorPage/ErrorPage'
import { MainPage } from "./Pages/MainPage/MainPage"

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPage />
    </div>
  )
}

export default App
