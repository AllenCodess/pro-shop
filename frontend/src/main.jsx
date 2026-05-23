import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./store.js";
import "./bootstrap.custom/bootstrap.custom.css";
import "./proshop-theme/proshop-theme/css/bootstrap.css";
import LoginPage from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import ShippingScreen from "./screens/ShipppingScreens.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ProfileScreen from "./screens/ProfileScreen.jsx";
import AdminRoute from "./components/AdminRoute.jsx";
import OrderListScreen from "./screens/admin/OrderListScreen.jsx";
import ProductListScreen from "./screens/admin/ProductListScreen.jsx";
import ProductEditScreen from "./screens/admin/ProductEditScreen.jsx";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PayPalScriptProvider deferLoading={true}>
          <App />
        </PayPalScriptProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
