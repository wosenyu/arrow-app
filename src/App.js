import Header from './components/Layout/Header'
import Arrows from './components/Bow-Arrow/Arrows';
import CartProvider from './components/store/CardProvider';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import CheckOut from './components/CheckOut/CheckOut';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Arrows />} />
      <Route path="/checkout" element={<CheckOut />} />

    </Routes>

    // <CartProvider>
    //   <Header />

    //   <main>
    //     <Arrows />
    //   </main>

    // </CartProvider>



  );
}

export default App;
