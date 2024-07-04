

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import LandingPage from "./pages/landing";
import Parties from "./pages/parties";
import WeddingPage from "./pages/weddings";
import About from "./pages/about-us";
import ContactUs from "./pages/contact-us";
<<<<<<< HEAD
import Funeral from "./pages/funerals";
=======
import Events from "./pages/events";
import SignUpForm from "./pages/signup";
import LoginForm from "./pages/login";
import EventForm from "./pages/eventForms/components/createEvents";
>>>>>>> e4dd718691df067cb585fd8b8c30ba7e6b5124fc

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
<<<<<<< HEAD
          path: "event/parties",
=======
          path: "events/parties",
>>>>>>> e4dd718691df067cb585fd8b8c30ba7e6b5124fc
          element: <Parties />
        },

        {
<<<<<<< HEAD
          path: "event/wedding",
=======
          path: "events/weddings",
>>>>>>> e4dd718691df067cb585fd8b8c30ba7e6b5124fc
          element: <WeddingPage />
        },
        {
          path: "contact-us",
          element: <ContactUs />

        },
        {
          path: "event/funeral",
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