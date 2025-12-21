import AidGuardian from './pages/AidGuardian';
import Company from './pages/Company';
import Elememetal from './pages/Elememetal';
import PlayArts from './pages/PlayArts';
import Products from './pages/Products';
import Showcase3D from './pages/Showcase3D';
import Stockhoo from './pages/Stockhoo';
import RoadmapPage from './pages/RoadmapPage';
import Contact from './pages/Contact';
import Home from './pages/Home';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AidGuardian": AidGuardian,
    "Company": Company,
    "Elememetal": Elememetal,
    "PlayArts": PlayArts,
    "Products": Products,
    "Showcase3D": Showcase3D,
    "Stockhoo": Stockhoo,
    "RoadmapPage": RoadmapPage,
    "Contact": Contact,
    "Home": Home,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};