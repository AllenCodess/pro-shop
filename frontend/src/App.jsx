import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import CartPage from "./screens/CartScreen";
import LoginPage from "./screens/LoginScreen";
import ProductScreen from "./screens/ProductScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShipppingScreens";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="" element={<PrivateRoute />}>
              <Route path="/shipping" element={<ShippingScreen />} />
            </Route>
            ;
          </Routes>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
