import { GlobalProvider } from "./context/GlobalState";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import OrdersInProgress from "./components/Orders/OrdersInProgress";
import Home from "./components/Orders/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/OrdersInProgress" element={<OrdersInProgress/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </div>
    </GlobalProvider>
  );
}

export default App;
