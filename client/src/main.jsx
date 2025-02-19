import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import "./Styles/index.css";
import App from "./App.jsx";
import {
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    RegisterPage,
    SupportPage,
    ServerErrorPage,
    EventsPage,
    BlogPage,
    GalleryPage,
    UpcomingprojectsPage,
    CreateEvent,
    GetEventPage
} from "./Pages/index.js";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="support" element={<SupportPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="server-error" element={<ServerErrorPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="blogs" element={<BlogPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="upcoming-projects" element={<UpcomingprojectsPage />} />
            <Route path="create-event" element={<CreateEvent />} />
            <Route path="getEvent" element={<GetEventPage/>} />
        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>
);
