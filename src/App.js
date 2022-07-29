import './App.scss';

import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomePage from './components/home/HomePage';
import Shipping from './components/shipping/Shipping';
import Mailer from './components/mailer/Mailer';
import Product from './components/product/Product';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="routes">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/mailer' element={<Mailer />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
