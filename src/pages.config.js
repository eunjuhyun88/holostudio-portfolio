import AidGuardian from './pages/AidGuardian';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Elememetal from './pages/Elememetal';
import PlayArts from './pages/PlayArts';
import Products from './pages/Products';
import RoadmapPage from './pages/RoadmapPage';
import Showcase3D from './pages/Showcase3D';
import Stockhoo from './pages/Stockhoo';
import Home from './pages/Home';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AidGuardian": AidGuardian,
    "Company": Company,
    "Contact": Contact,
    "Elememetal": Elememetal,
    "PlayArts": PlayArts,
    "Products": Products,
    "RoadmapPage": RoadmapPage,
    "Showcase3D": Showcase3D,
    "Stockhoo": Stockhoo,
    "Home": Home,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};