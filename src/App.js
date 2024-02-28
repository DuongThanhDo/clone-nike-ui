import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Product } from './pages/Product';
import { ProductDetail } from './pages/ProductDetail';

function App() {
    return (
        <div className="transition-all">
            <Routes>
                <Route
                    path="/"
                    element={
                        <DefaultLayout>
                            <Home />
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <DefaultLayout>
                            <Cart />
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/product"
                    element={
                        <DefaultLayout>
                            <Product />
                        </DefaultLayout>
                    }
                />
                <Route
                    path="/product/:detail"
                    element={
                        <DefaultLayout>
                            <ProductDetail />
                        </DefaultLayout>
                    }
                />
                {/* <Route path="/" element={<DefaultLayout></DefaultLayout>}/> */}
            </Routes>
        </div>
    );
}

export default App;
