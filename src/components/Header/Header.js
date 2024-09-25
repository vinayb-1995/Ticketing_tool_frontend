import { NavLink } from "react-router-dom";

const Header=()=>{
    return(
        <>
          <div className="d-flex justify-content-around bg-black">
            <NavLink to="/">login</NavLink>
            <NavLink to="/admin">admin</NavLink>
          </div>
        </>
    )
}
export default Header;