import {Routes, Route} from 'react-router-dom';

import Home from "./routes/home/home.component";
import Menu from "./routes/menu/menu.component";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Menu />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
};

export default App;
