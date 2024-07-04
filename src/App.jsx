

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import LandingPage from "./pages/landing";
import Parties from "./pages/parties";
import WeddingPage from "./pages/weddings";
import About from "./pages/about-us";
import ContactUs from "./pages/contact-us";
import Funeral from "./pages/funerals";
import Events from "./pages/events";
import SignUpForm from "./pages/signup";
import LoginForm from "./pages/login";
import EventForm from "./pages/eventForms/components/createEvents";

function App() {
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
          path: "events",
          element: <Events />
        },

        {
          path: "events/parties",
          element: <Parties />
        },

        {
          path: "events/weddings",
          element: <WeddingPage />
        },
        {
          path: "contact-us",
          element: <ContactUs />

        },
        {
          path: "events/funerals",
          element: <Funeral />

        },
        {
          path: "signup",
          element: <SignUpForm />
        },
        {
          path: "login",
          element: <LoginForm />
        },
        {
          path: "create-event",
          element: <EventForm/>
        },


      ]
    },

  ]);

  return <RouterProvider router={router} />;

}

export default App