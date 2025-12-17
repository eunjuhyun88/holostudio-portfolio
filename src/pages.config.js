import Home from './pages/Home';
import AidGuardian from './pages/AidGuardian';
import PlayArts from './pages/PlayArts';
import Elememetal from './pages/Elememetal';
import Contact from './pages/Contact';
import Stockhoo from './pages/Stockhoo';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "AidGuardian": AidGuardian,
    "PlayArts": PlayArts,
    "Elememetal": Elememetal,
    "Contact": Contact,
    "Stockhoo": Stockhoo,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};