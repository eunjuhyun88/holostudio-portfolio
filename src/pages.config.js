import AidGuardian from './pages/AidGuardian';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Showcase3D from './pages/Showcase3D';
import Company from './pages/Company';
import Elememetal from './pages/Elememetal';
import Home from './pages/Home';
import PlayArts from './pages/PlayArts';
import Stockhoo from './pages/Stockhoo';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AidGuardian": AidGuardian,
    "Contact": Contact,
    "Products": Products,
    "Showcase3D": Showcase3D,
    "Company": Company,
    "Elememetal": Elememetal,
    "Home": Home,
    "PlayArts": PlayArts,
    "Stockhoo": Stockhoo,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};