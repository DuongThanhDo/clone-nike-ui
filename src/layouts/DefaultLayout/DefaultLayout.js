import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="px-primary">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
