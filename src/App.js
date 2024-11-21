import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductProvider from "./states/ProductProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UserProvider from "./states/UserProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="w-full font-poppins tracking-wide">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ProductProvider>
          <UserProvider>
            <Navbar />
            <Outlet />
          </UserProvider>
        </ProductProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
