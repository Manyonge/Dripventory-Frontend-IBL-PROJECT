import { createBrowserRouter } from "react-router-dom";
import AddCustomersPage from "../pages/AddCustomersPage";
import AddDeliveriesPage from "../pages/AddDeliveriesPage";
import AddProductsPage from "../pages/AddProductsPage";
import AddSalesPage from "../pages/AddSalesPage";
import CustomersPage from "../pages/CustomersPage";
import DashboardPage from "../pages/DashboardPage";
import DeliveriesPage from "../pages/DeliveriesPage";
import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import SalesPage from "../pages/SalesPage";
import SignUpPage from "../pages/SignUpPage";
import WelcomePage from "../pages/WelcomePage";
export const router = createBrowserRouter([
  {
    index: true,
    element: <WelcomePage />,
  },
  { path: "login", element: <LoginPage /> },
  { path: "signUp", element: <SignUpPage /> },
  { path: "dashboard", element: <DashboardPage /> },
  { path: "products", element: <ProductsPage /> },
  { path: "products-add", element: <AddProductsPage /> },
  { path: "deliveries", element: <DeliveriesPage /> },
  { path: "deliveries-add", element: <AddDeliveriesPage /> },
  { path: "customers", element: <CustomersPage /> },
  { path: "customers-add", element: <AddCustomersPage /> },
  { path: "sales", element: <SalesPage /> },
  { path: "sales-add", element: <AddSalesPage /> },
]);
