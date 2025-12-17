import Home from './pages/Home';
import AidGuardian from './pages/AidGuardian';
import PlayArts from './pages/PlayArts';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "AidGuardian": AidGuardian,
    "PlayArts": PlayArts,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};