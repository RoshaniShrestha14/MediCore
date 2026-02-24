import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import About from "../pages/About";
import Services from "../pages/Services";
import Doctor from "../pages/Doctor";
import NotFound from "../components/ui/NotFound";
import { ScrollToTop } from "./ScrollToTop";
import Home from "../pages/Home";
import BookAppointment from "../pages/BookAppointment";



export default function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      
      <Routes>
        <Route element={<Layout />}>
             <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/appointment" element={<BookAppointment />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}