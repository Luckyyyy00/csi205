import { Outlet } from "react-router-dom";
import AppHeader from "../componants/AppHeader";
import AppNavbar from "../componants/AppNavbar";
import AppFooter from "../componants/AppFooter";

const AppLauout = ({ products, carts ,setToken }) => {
    return (
        <>
            <AppHeader />
            <AppNavbar products={products} carts={carts} setToken={setToken} />
            <Outlet />
            <AppFooter />
        </>);
}

export default AppLauout;