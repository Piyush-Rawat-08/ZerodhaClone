import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./signup.css";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
        return;
      }

      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/`,
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        if (status) {
          setUsername(user);
          toast(`Hello ${user}`, {
            position: "top-right",
          });
          // Redirect to dashboard app
          setTimeout(() => {
            window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}`;
          }, 1000);
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Auth error:", error);
        removeCookie("token");
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  return (
    <>
      <div className="home_page">
        <h4>Redirecting to Dashboard...</h4>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;