import Header from './components/Layout/Header'
import Arrows from './components/Bow-Arrow/Arrows';
import CartProvider from './components/store/CardProvider';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'


function App() {
  return (

    <CartProvider>
      <Header />

      <main>
        <Arrows />
      </main>

    </CartProvider>



  );
}

export default App;
