import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearToken } from "../../features/slice/authSlice";
import { IoLogOutOutline } from "react-icons/io5";

const Logout = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(clearToken());
        navigate("/")
    }
  return (
    <>
      <span onClick={handleLogout} className="link me-4 d-flex align-items-center">
        <p className="me-2">Logout</p>
        <IoLogOutOutline className="icons" />
      </span>
    </>
  );
};
export default Logout;
