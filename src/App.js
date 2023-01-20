import MainGadgets from './MainGadgets';
import MyMartialArtsGrid from './GridLayout';
import MainSearch from './MainSearch';



import { Route, Routes, Link } from 'react-router-dom';
function App() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/martial-arts">Effect Martial Arts for Self Defense</Link> </li>
                    <li><Link to="/search-image">Search Image With API</Link> </li>
                </ul>
            </nav>
            
            <Routes>
                <Route path="/" element={<MainGadgets />} />
                <Route path="/martial-arts" element={<MyMartialArtsGrid />} />
                <Route path="/search-image" element={<MainSearch />} />
            </Routes>
        </>
    );
}
export default App;