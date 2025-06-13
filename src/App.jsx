import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Home from './routes/Home';
import Triagem from './routes/Triagem';
import Login from './routes/Login';
import PageNotFound from './error/PageNotFound';

function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/triagem" element={<Triagem/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
