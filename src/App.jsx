import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import { loader as topLoader } from "./pages/HomePageTopSection";
import { SectionProvider } from "./Context";
import CoinDetails, { loader as coinDetailLoader } from "./pages/CoinDetails";
import NotFound from "./components/NotFound";
import Error from "./components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={<HomePage />}
        loader={topLoader}
        errorElement={<Error />}
      />
      <Route
        path="coin/:id"
        element={<CoinDetails />}
        loader={coinDetailLoader}
        errorElement={<Error />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return (
    <SectionProvider>
      <RouterProvider router={router} />
    </SectionProvider>
  );
}

export default App;
