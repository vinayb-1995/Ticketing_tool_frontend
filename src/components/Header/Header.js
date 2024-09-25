import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <>
          <div className="d-flex justify-content-around bg-black">
            <Link to="/">login</Link>
            <Link to="/admin">admin</Link>
          </div>
        </>
    )
}
export default Header;