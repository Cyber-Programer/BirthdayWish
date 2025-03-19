import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero =()=>{
    return(
        <div className="p-10 text-center sm:text-start">
            <h3 className="text-5xl sm:text-6xl font-semibold text-gray-500 pb-5 sm:pb-8 sm:pt-8">Let's Make Your</h3>
            <span className="main-h1 text-gray-600 font-extrabold text-4xl sm:text-8xl sm:pl-10">Custom Wish</span>
            <div className="hero-p pt-14">
                <p className="capitalize text-[15px] sm:text-2xl text-gray-700">using this application you can make custom birthday wish card and share it with many formate</p>
                <p className="capitalize text-[15px] sm:text-2xl text-gray-700 pt-5">Formate: Direct URL / QR-Code</p>
            </div>
            <Link to="/card" className="bg-blue-400 flex w-fit cursor-pointer mx-auto sm:mx-0 hover:shadow-xl shadow-gray-500 items-center gap-3 px-10  py-2 rounded-3xl font-bold text-gray-800 mt-15">Let's Make <FaLongArrowAltRight/></Link>
        </div>
        
    )
}

export default Hero