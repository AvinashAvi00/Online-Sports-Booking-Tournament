import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage'

function App() {
  return (
    <>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<HomePage />} />
       
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
