import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/Navbar/NavBar.jsx';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;