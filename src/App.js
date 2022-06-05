import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Homepage from './Components/Homepage.js';
import MeetTheCats from './Components/MeetTheCats';
import Booking from './Components/Booking.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/meet_the_cats" element={<MeetTheCats/>}></Route>
          <Route path="/book_now" element={<Booking/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;