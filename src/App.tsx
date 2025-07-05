import React from 'react'
import { MainPage } from './Pages/MainPage/MainPage'
import { Header } from './Components/Header/Header'
import { ErrorPage } from './Pages/ErrorPage/ErrorPage'

function App() {
  return (
    <div className="App">
      <Header />
      <ErrorPage />
    </div>
  )
}

export default App
