import "./App.css";
import Home from "./components/home/Home";
import BoardCategories from "./components/BoardCategories";
import PrivacyPolicy from "./components/infoLinks/PrivacyPolicy";
import TermsOfService from "./components/infoLinks/TermsOfService";
import ShippingRefundPolicy from "./components/infoLinks/ShippingRefundPolicy";
import ContactUs from "./components/infoLinks/ContactUs";
import AboutUs from "./components/infoLinks/AboutUs";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import { QueryClientProvider, QueryClient } from "react-query";
import OtpAuthentication from "./components/OtpAuthentication";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";


function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boardcategories" element={<><Header /><BoardCategories /><Footer /></>} />
          <Route path="/privacypolicy" element={<><Header /><PrivacyPolicy /><Footer /></>} />
          <Route path="/termsofservice" element={<><Header /><TermsOfService /><Footer /></>} />
          <Route path="/shippingandrefund" element={<><Header /><ShippingRefundPolicy /><Footer /></>} />
          <Route path="/contactus" element={<><Header /><ContactUs /><Footer /></>} />
          <Route path="/aboutus" element={<><Header /><AboutUs /><Footer /></>} />
          <Route path="/register" element={<Register />} />
          <Route path="/authenticate" element={<OtpAuthentication />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
