
import { Outlet } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import CartProvider from '../store/CartProvider';

function RootLayout() {
    return (
        <CartProvider>
            <Header />
            <Outlet />
            <Footer />
        </CartProvider>
    )
}

export default RootLayout




