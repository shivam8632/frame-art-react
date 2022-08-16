import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import HomePage from '../components/home/HomePage';
import Product from '../components/product/Product';
import Login from '../components/login/Login';
import SignUp from '../components/signup/SignUp';
import About from '../components/about/About';
import Accessibility from '../components/accessibility/Accessibility';
import Terms from '../components/terms/Terms';
import Privacy from '../components/privacy/Privacy';
import BlogList from '../components/blogs/blog-list/BlogList';
import BlogContent from '../components/blogs/blog-content/BlogContent';
import BoxingList from '../components/boxing/boxing-list/BoxingList';
import BoxingContent from '../components/boxing/boxing-content/BoxingContent';
import CustomerReview from '../components/customer-reviews/CustomerReviews';
import Material from '../components/material/Material';

function Routing() {
  return (
      
    <div className="routes">
    <Navigation />
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product' element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/terms-of-use" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/blog/customer-stories" element={<BlogList />} />
        <Route path="/blog" element={<BlogContent />} />
        <Route path="/blogs/boxing-and-packaging-articles" element={<BoxingList />} />
        <Route path = '/blogs/boxing-and-packaging-articles/boxing-content' element={<BoxingContent />} />
        <Route path ='/customer-reviews' element={<CustomerReview />} />
        <Route path = '/material' element={<Material />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default Routing;
