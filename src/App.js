import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { ToastContainer } from "react-toastify";
import DebtsPage from "./pages/DebtsPage";
import Layout from "./components/layout";
import HomePage from "./pages/HomePage";
import TransactionPage from "./pages/TransactionPage";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/debts" element={<DebtsPage />} />
          <Route path="/transaction" element={<TransactionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
