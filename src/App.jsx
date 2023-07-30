import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import { Home } from "./pages/Home";
import { NewsDetails } from "./components/NewsDetails";
import { SectionNewsList } from "./components/SectionNewsList";
import ErrorComponent from "./components/ErrorComponent";
import { MenuContextProvider } from "./context/MenuContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <MenuContextProvider>
          <RootLayout />
        </MenuContextProvider>
      }
      errorElement={<ErrorComponent />}
    >
      <Route index element={<Home />} />
      <Route path="/:newstitle/:urlpath" element={<NewsDetails />} />
      <Route path="section/:section/:urlpath" element={<SectionNewsList />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
