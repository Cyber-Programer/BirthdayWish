import { useContext } from "react";
import { FaBirthdayCake, FaPiedPiperHat } from "react-icons/fa";
import { cardContext } from "../context/cardContext";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Nav = () => {
  const cardData = useContext(cardContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleShareClick = () => {
    if (cardData.name !== "click to change all") {
        let urlIs = `${window.location.origin}/show.html?name=${encodeURIComponent(
            cardData.name
        )}&url=${encodeURIComponent(cardData.imgurl)}`;
        window.open(urlIs);
    } else {
        alert("Please Edit The Name And Image By Clicking On Them");
    }
};


  return (
    <div className=" w-screen fixed top-0 left-0 flex items-center justify-between px-4 py-5  border-2 border-transparent border-b-black bg-blue-100 z-50">
      <div
        className="flex gap-3 items-center text-lg sm:text-4xl"
        title="Let's Celebrate Birthday"
      >
        <FaBirthdayCake className="text-gray-800 hidden sm:block" />
        <Link to="/" className="lcb text-gray-800">
          Make Wish
        </Link>
      </div>
      <div className="flex gap-2 sm:gap-3 font-bold text-gray-800 text-[12px] sm:text-lg">
        <Link
          to="/"
          className="border-b-2 border-transparent hover:border-blue-500 transition duration-300"
        >
          Qr-code
        </Link>

        <Link
          to="about"
          className="border-b-2 border-transparent hover:border-blue-500 transition duration-300"
        >
          About Me
        </Link>
        <button
          onClick={handleShareClick}
          className="border-b-2 border-transparent hover:border-blue-500 transition duration-300"
        >
          Share
        </button>
      </div>
    </div>
  );
};
