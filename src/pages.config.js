import AidGuardian from './pages/AidGuardian';
import Contact from './pages/Contact';
import Elememetal from './pages/Elememetal';
import Home from './pages/Home';
import Products from './pages/Products';
import RoadmapPage from './pages/RoadmapPage';
import Showcase3D from './pages/Showcase3D';
import Stockhoo from './pages/Stockhoo';
import PlayArts from './pages/PlayArts';
import Company from './pages/Company';
import __Layout from './Layout.jsx';


export const PAGES = {
    "AidGuardian": AidGuardian,
    "Contact": Contact,
    "Elememetal": Elememetal,
    "Home": Home,
    "Products": Products,
    "RoadmapPage": RoadmapPage,
    "Showcase3D": Showcase3D,
    "Stockhoo": Stockhoo,
    "PlayArts": PlayArts,
    "Company": Company,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};