import '../src/assets/css/animation.css';

import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Product } from './pages/Product';
import { ProductDetail } from './pages/ProductDetail';
import { Favourite } from './pages/Favourite';

const routesPages = [
    { path: '/', component: <Home /> },
    { path: '/cart', component: <Cart /> },
    { path: '/product', component: <Product /> },
    { path: '/product/:detail', component: <ProductDetail /> },
    { path: '/favourite', component: <Favourite /> },
];

function App() {
    return (
        <div className="transition-all">
            <Routes>
                {routesPages.map((page, index) => {
                    return (
                        <Route key={index} path={page.path} element={<DefaultLayout>{page.component}</DefaultLayout>} />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
