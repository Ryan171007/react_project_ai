import {Link} from "react-router";

const Navbar = () => {
    return (
        <div className="flex justify-center items-center w-[100vw]">
        <nav className="navbar flex w-[80vw]">
            <Link to="/" className="navbar">
                <p className="text-2xl font-bold text-gradient">
                    Resumind
                </p>    
            </Link>

            <Link to="/Upload" className="primary-button justify-center items-center ">
                Upload Resumind
            </Link>
            </nav>
        </div> 
    )
}

export default Navbar;