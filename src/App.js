import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth/Index";
import ExpenseTracker from "./pages/expense-tracker/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Auth />} />
        <Route path="/expense-tracker" exact element={<ExpenseTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
