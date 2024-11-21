import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductProvider from "./states/ProductProvider";
import UserProvider from "./states/UserProvider";

function App() {
  return (
    <div className="w-full font-poppins tracking-wide">
      <ProductProvider>
        <UserProvider>
          <Navbar />
          <Outlet />
        </UserProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
