import { useContext } from "react";
import { AxiosInstance } from "../routes/axiosInstance";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  let { setIsLoggedInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogout() {
    let res = await AxiosInstance.post("/user/logout");
    if (res.data.success) {
      setIsLoggedInUser(false);
      toast.success("Logged Out");
      navigate("/");
    }
  }

  return (
    <nav className="flex justify-between items-center px-10 shadow">
      <div className="font-extrabold text-2xl">QShop</div>

      <section className="flex gap-8 font-semibold">
        <div className="p-3">
          <a href="">Home</a>
        </div>
        <div className="p-3">
          <a href="">Products</a>
        </div>
        <div className="p-3">Cart</div>
        <div className="p-3">
          <span
          onClick={handleLogout}
          className="px-3 py-1 rounded-2xl bg-black text-white">
            Logout
          </span>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
