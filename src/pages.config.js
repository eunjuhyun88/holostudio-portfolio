import Home from './pages/Home';
import AidGuardian from './pages/AidGuardian';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "AidGuardian": AidGuardian,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};