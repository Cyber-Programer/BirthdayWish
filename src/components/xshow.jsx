import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Show = () => {
  // Get query parameters from URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name'); // Get 'name' from URL
  const image = queryParams.get('url'); // Get 'url' (image URL) from URL

  const [showBalloons, setShowBalloons] = useState(true);
  const [showFireworks, setShowFireworks] = useState(true);

  // Trigger balloon and firework animation on page load
  useEffect(() => {
    // Remove balloons and fireworks after 2 seconds
    setTimeout(() => {
      setShowBalloons(false);
      setShowFireworks(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-30 relative">
      {/* Fireworks animation container */}
      {showFireworks && (
        <div className="fireworks absolute top-0 left-0 right-0 bottom-0 z-50 pointer-events-none">
          <div className="firework" />
          <div className="firework" />
          <div className="firework" />
        </div>
      )}

      {/* Balloons animation container */}
      {showBalloons && (
        <div className="balloons absolute top-0 left-0 right-0 bottom-0 z-50 pointer-events-none">
          <div className="balloon" />
          <div className="balloon" />
          <div className="balloon" />
        </div>
      )}

      <div className="w-[98%] h-[400px] relative flex items-center justify-center">
        <div
          className="w-full sm:w-[600px] h-[500px] bg-center bg-cover rounded-lg shadow-lg absolute"
          style={{ backgroundImage: "url('../../img/birthday.png')" }}
        >
          <div className="h-full flex items-center justify-center px-2 py-1 rounded-md">
            <div className="happy-birthday absolute top-[2%] flex flex-col text-4xl z-20">
              <span className="uppercase happy">happy</span>
              <span className="capitalize birthday font-bold -rotate-9 text-gray-800 text-5xl">
                birthday
              </span>
            </div>
            {/* Display user image from URL */}
            <img
              src={image || "https://avatars.githubusercontent.com/u/125746506?v=4"} // Default image URL
              alt="userimg"
              className="min-w-[300px] w-1/2 bg-center bg-cover rounded-lg bg-white border-3 px-5 pt-5 pb-20 absolute top-[20%] z-10"
            />

            {/* Display user name from URL */}
            <div className="z-30 text-5xl font-light birthday bottom-[13%] absolute text-center">
              {name || "Name not provided"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
