import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductsDerails";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/products/:productId">
        <ProductDetails/>
      </Route>
      </main>
    </div>
  );
}

export default App;
