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
import Assembly from '../components/assembly/Assembly';
import Cart from '../components/cart/Cart';
import Checkout from '../components/checkout/Checkout';
import Payment from '../components/payment/Payment';
import PaymentForm from '../payments/stripe/Stripe';
import ProductDisplay from '../payments/stripe/Stripe';
import Thank from '../components/thankyou/Thank';
import Settings from '../components/settings/Settings';
import Gallery from '../components/gallery/Gallery';
import Products from '../components/sale/Sale';
import Forget from '../components/password/Forget';
import Paypal from '../payments/paypal/Paypal'

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
        <Route path = '/assembly' element={<Assembly />} />
        <Route path = '/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/paymentForm' element={<PaymentForm />} />
        <Route path='/stripe' element={<ProductDisplay />} />
        <Route path ='/thankyou' element={<Thank />} />
        <Route path ='/settings' element={<Settings />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path="/sale" element={<Products />} />
        <Route path='forget-password' element={<Forget />} />
        <Route path='/paypal' element={<Paypal />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default Routing;
