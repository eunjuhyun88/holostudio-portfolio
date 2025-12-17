import Home from './pages/Home';
import AidGuardian from './pages/AidGuardian';
import PlayArts from './pages/PlayArts';
import Elememetal from './pages/Elememetal';
import Contact from './pages/Contact';
import Stockhoo from './pages/Stockhoo';
import Company from './pages/Company';
import Products from './pages/Products';
import Showcase3D from './pages/Showcase3D';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "AidGuardian": AidGuardian,
    "PlayArts": PlayArts,
    "Elememetal": Elememetal,
    "Contact": Contact,
    "Stockhoo": Stockhoo,
    "Company": Company,
    "Products": Products,
    "Showcase3D": Showcase3D,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};