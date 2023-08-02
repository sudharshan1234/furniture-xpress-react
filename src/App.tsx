import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AboutPage,
  AuthWrapper,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  PrivateRoute,
  ProductsPage,
  SingleProductPage,
} from "./pages";
import { Footer, Navbar, Sidebar } from "./components";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
        <Route path='/cart' element={<CartPage></CartPage>}></Route>
        <Route path='/products' element={<ProductsPage></ProductsPage>}></Route>
        <Route
          path='/products/:id'
          element={<SingleProductPage></SingleProductPage>}
        ></Route>
        <Route path='/checkout' element={<CheckoutPage></CheckoutPage>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
