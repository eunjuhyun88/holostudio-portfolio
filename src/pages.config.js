import Home from './pages/Home';
import AidGuardian from './pages/AidGuardian';
import PlayArts from './pages/PlayArts';
import Elememetal from './pages/Elememetal';
import Stocku from './pages/Stocku';
import Contact from './pages/Contact';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "AidGuardian": AidGuardian,
    "PlayArts": PlayArts,
    "Elememetal": Elememetal,
    "Stocku": Stocku,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};