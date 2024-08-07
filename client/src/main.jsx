import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
    Feed,
    Home,
    Mentorship,
    Roadmaps,
    BecomeMentor,
    Search,
} from "./pages/index.js";

import {
    AccountControlForm,
    AchievementsForms,
    EducationForm,
    ExperienceForm,
    ProfileForm,
    SkillsForm,
} from "./Components/Forms/index.js";

import { ChakraProvider, Flex } from "@chakra-ui/react";
import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import Signup from "./Components/Signup/Signup.jsx";
import Login from "./Components/Login/Login.jsx";
import Layoutone from "./Components/Layout/Layoutone.jsx";
import NotFound from "./LandingPage/NotFound.jsx";
import {
    FaUserEdit,
    FaTools,
    FaGraduationCap,
    FaBriefcase,
    FaUserCog,
    FaTrophy,
    FaHome,
} from "react-icons/fa";
import AdminLayout from "./Components/admin/Layout/AdminLayout.jsx";
import AdminBase from "./Components/admin/AdminBase.jsx";
import AdminHome from "./Components/admin/pages/AdminHome.jsx";
import AdminLogin from "./Components/admin/pages/AdminLogin.jsx";
import AcceptMentorRequests from "./Components/admin/pages/AcceptMentorRequests.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/",
                element: <Layoutone />, // Layout wrapper for nested routes
                children: [
                    {
                        path: "feed",
                        element: <Feed />,
                    },
                    {
                        path: "mentorship",
                        element: <Mentorship />,
                    },
                    {
                        path: "roadmaps",
                        element: <Roadmaps />,
                    },
                    {
                        path: "become-mentor/:stepIndex",
                        element: <BecomeMentor />,
                    },
                    {
                        path: "search",
                        element: <Search />,
                    },
                ],
            },
            {
                path: "/update-details",
                element: (
                    <Layoutone
                        VNavItems={[
                            {
                                label: "Edit Profile",
                                href: "edit-profile",
                                icon: FaUserEdit,
                            },
                            {
                                label: "Edit Skills",
                                href: "edit-skills",
                                icon: FaTools,
                            },
                            {
                                label: "Edit Education",
                                href: "edit-education",
                                icon: FaGraduationCap,
                            },
                            {
                                label: "Edit Experience",
                                href: "edit-experience",
                                icon: FaBriefcase,
                            },
                            {
                                label: "Edit Achievements",
                                href: "edit-achievements",
                                icon: FaTrophy,
                            },
                            {
                                label: "Account Control",
                                href: "account-control",
                                icon: FaUserCog,
                            },
                        ]}
                    />
                ),
                children: [
                    {
                        path: "edit-profile",
                        element: <ProfileForm />,
                    },
                    {
                        path: "edit-skills",
                        element: <SkillsForm />,
                    },
                    {
                        path: "edit-education",
                        element: <EducationForm />,
                    },
                    {
                        path: "edit-experience",
                        element: <ExperienceForm />,
                    },
                    {
                        path: "edit-achievements",
                        element: <AchievementsForms />,
                    },
                    {
                        path: "account-control",
                        element: <AccountControlForm />,
                    },
                    {
                        path: "",
                        element: (
                            <Navigate
                                to="edit-profile"
                                replace
                            />
                        ),
                    },
                ],
            },
            {
                path: "signup",
                element: <Signup />,
            },
            {
                path: "login",
                element: <Login />,
            },
        ],
    },
    {
        path: "/admin62edbdaac78f76f00ef050563669970b",
        element: <AdminBase />, // AdminBase as the entry point for all admin pages
        children: [
            {
                path: "/admin62edbdaac78f76f00ef050563669970b",
                element: (
                    <AdminLayout
                        navItems={[
                            {
                                label: "Home",
                                href: "home",
                                icon: FaHome,
                            },
                            {
                                label: "Accept Mentor Requests",
                                href: "accept-mentor-requests",
                                icon: FaUserEdit,
                            },
                            {
                                label: "Manage Mentors",
                                href: "manage-mentors",
                                icon: FaTools,
                            },
                            {
                                label: "Users Info",
                                href: "users-info",
                                icon: FaGraduationCap,
                            },
                        ]}
                    />
                ),
                children: [
                    {
                        path: "home",
                        element: <AdminHome />,
                    },
                    {
                        path: "accept-mentor-requests",
                        element: <AcceptMentorRequests/>,
                    },
                    {
                        path: "manage-mentors",
                        element: <h1>Manage Mentors</h1>,
                    },
                    {
                        path: "users-info",
                        element: <h1>Users Info</h1>,
                    },
                    {
                        path: "",
                        element: (
                            <Navigate
                                to="home"
                                replace
                            />
                        ),
                    },
                ],
            },
        ],
    },
    {
        path: "/admin62edbdaac78f76f00ef050563669970b/admin-login",
        element: <AdminLogin />,
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ChakraProvider>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ChakraProvider>
    </React.StrictMode>
);
