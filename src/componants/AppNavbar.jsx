import { Link } from "react-router-dom"
import { Button } from "react-bootstrap";

const AppNavbar = ({ products, carts , setToken }) => {
    return (
        <div className="d-flex justify-content-center gap-2">
            <Link to={'home'}><Button variant="outline-primary">Home</Button></Link>
            <Link to={'Calculator'}><Button variant="outline-primary">Calculator</Button></Link>
            <Link to={'animation'}><Button variant="outline-primary">Animation</Button></Link>
            <Link to={'components'}><Button variant="outline-primary">Components</Button></Link>
            <Link to={'todos'}><Button variant="outline-primary">Todos</Button></Link>
            <Link to={'products'}><Button variant="outline-primary">Products({products.length})</Button></Link>
            <Link to={'carts'}><Button className=" position-relative " variant="outline-primary">
                Carts
                {carts.length > 0 && (
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {carts.length < 10 ? carts.length : '9+'}
                        <span class="visually-hidden">unread messages</span>
                    </span>

                )}
            </Button></Link>
            <Link to={'logout'}><Button variant="outline-danger" size="lg" style={{marginLeft:' 2rem'}}><h5  onClick={() => {
                setToken('')
            }}>Logout</h5></Button></Link>

        </div>
    );
}

export default AppNavbar;