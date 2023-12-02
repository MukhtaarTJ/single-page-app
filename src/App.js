import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Root from "./pages/Root";
import Error from "./pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="product" element={<Product />} />

      <Route path="*" element={<Error />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
