import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/rootLayout";
import LandingPage from "./pages/landing";
import Parties from "./pages/parties";
import WeddingPage from "./pages/weddings";
import About from "./pages/about-us";
import ContactUs from "./pages/landing/components/contact-us";
import Funeral from "./pages/funerals";
import EventCard from "./pages/events/eventCard";
import SignUpForm from "./pages/signup";
import LoginForm from "./pages/login";
import EventForm from "./pages/eventForms/components/createEvents";
import Events from "./pages/events/events";
import EventManagement from "./pages/eventForms/components/manageEvents";
import Conference from "./pages/conferences";

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
          path: "about",
          element: <About />
        },
        {
          path: "events/all",
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
          path: "contact",
          element: <ContactUs />

        },
        {
          path: "events/funerals",
          path: "events/funerals",
          element: <Funeral />

        },

        {
          path: "events/conferences",
          element: <Conference/>

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
        {
          path: "manage-event",
          element: <EventManagement/>
        },



      ]
    },

  ]);

  return <RouterProvider router={router} />;

}

export default App