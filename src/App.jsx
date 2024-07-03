

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import LandingPage from "./pages/landing";
import Parties from "./pages/parties";
import WeddingPage from "./pages/weddings";
import About from "./pages/about-us";
import ContactUs from "./pages/contact-us";

function App () {
  const router = createBrowserRouter([


    {
      path: "/",
      element: <RootLayout />,
      children: [

        {
          index: true,
          path: "/",
          element: <LandingPage />
        },

        {
          path: "about-us",
          element: <About />
        },

        {
          path: "parties",
          element: <Parties />
        },

        {
          path: "wedding",
          element: <WeddingPage />
        },
        {
          path: "contact-us",
          element: <ContactUs />
        },




      ]
    },

  ]);

  return <RouterProvider router={router}/>;

}

export default App