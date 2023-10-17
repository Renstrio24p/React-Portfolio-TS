import {Navigate, createBrowserRouter } from "react-router-dom";
const Layout = React.lazy(()=>import('./pages/Layout/Layout'));
const Home = React.lazy(()=>import('./pages/Home/Home'));
const About = React.lazy(()=>import("./pages/About/About"));
const Skills = React.lazy(()=>import('./pages/Skills/Skills'));
const Services = React.lazy(()=>import('./pages/Services/Services'));
const Portfolio = React.lazy(()=>import('./pages/Portfolio/Portfolio'));
const Contact = React.lazy(()=>import('./pages/Contact/Contact'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/skills',
                element: <Skills />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/portfolio',
                element: <Portfolio />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    },
    {
        path: '*',
        element: <Navigate to={'/'} />
    }
])