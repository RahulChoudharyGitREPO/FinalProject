import { Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Users from "../../pages/Users";
import FAQs from "../../pages/FAQs";
import TicketEdit from "../../pages/TicketEdit";
import Login from "../../pages/Login";
import './Navbar.css'
import Properties from "../../pages/Properties";

function Navbar() {
    const isLoggedIn = false;
    return (
        <>
            <div className="Main">
                <div className="Right">
                    <h1>logo</h1>
                </div>
                <div className="left">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/users">Ticket Create</Link>
                    <Link to="/FAQs">Ticket </Link>
                    <Link to="/Properties">Ticket View</Link>
                    <Link to='/TicketEdit'>Ticket Edit</Link>
                    <Link to='/Login'>Login</Link>
                    {isLoggedIn && <li><Link to="/logout">Logout</Link></li>}


                </div>

            </div>
            <hr />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/users" element={<Users />} />
                <Route path="/FAQs" element={<FAQs />} />
                <Route path="/Properties" element={<Properties />} />
                <Route path='/TicketEdit' element={<TicketEdit />} />
                <Route path='/Login' element={<Login />} />

            </Routes>
        </>
    );
}

export default Navbar;