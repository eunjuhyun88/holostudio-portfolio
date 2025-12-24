import AidGuardian from './pages/AidGuardian';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Elememetal from './pages/Elememetal';
import Home from './pages/Home';
import PlayArts from './pages/PlayArts';
import Products from './pages/Products';
import RoadmapPage from './pages/RoadmapPage';
import Stockhoo from './pages/Stockhoo';
import Showcase3D from './pages/Showcase3D';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AidGuardian": AidGuardian,
    "Company": Company,
    "Contact": Contact,
    "Elememetal": Elememetal,
    "Home": Home,
    "PlayArts": PlayArts,
    "Products": Products,
    "RoadmapPage": RoadmapPage,
    "Stockhoo": Stockhoo,
    "Showcase3D": Showcase3D,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};