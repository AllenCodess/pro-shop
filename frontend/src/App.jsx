import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import CartPage from "./screens/CartScreen";
import LoginPage from "./screens/LoginScreen";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
