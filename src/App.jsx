import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/HomePage/Layout"

function App() {

  return (
    <BrowserRouter>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] no-scrollbar overflow-auto h-screen">
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
