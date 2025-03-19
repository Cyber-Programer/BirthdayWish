import { useContext } from "react";
import { cardContext } from "../context/cardContext";

const Card = () => {
  const cardData = useContext(cardContext);

  const handleNameChange = (e) => {
    cardData.setName(e.target.value); // Update state directly from input value
  };

  const handleImgClick = () => {
    const newImg = prompt("Enter New Image Link:");
    if (newImg) {
      cardData.setImgurl(newImg);
    }else{
      console.log('image not found')
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-30">
      <div className="w-[98%] h-[400px] relative flex items-center justify-center">
        <div
          className="w-full sm:w-[600px] h-[500px] bg-center bg-cover rounded-lg shadow-lg absolute"
          style={{ backgroundImage: "url('https://i.postimg.cc/zvL5gChw/birthday.png')" }}

        >
          <div className="h-full flex items-center justify-center px-2 py-1 rounded-md">
            <div className="happy-birthday absolute top-[2%] flex flex-col text-4xl z-20">
              <span className="uppercase happy">happy</span>
              <span className="capitalize birthday font-bold -rotate-9 text-gray-800 text-5xl">
                birthday
              </span>
            </div>
            <img
              src={cardData.imgurl} // Default image URL
              alt="userimg"
              className="min-w-[300px] w-1/2 bg-center bg-cover rounded-lg bg-white border-3 px-5 pt-5 pb-20 absolute top-[20%] z-10"
              onClick={handleImgClick} // Open prompt to change image URL
            />

            {/* Editable Name Input */}
            <input
              className="z-30 text-5xl font-light birthday bottom-[13%] absolute bg-transparent border-none outline-none text-center max-w-full w-[90%] sm:w-auto"
              placeholder="Click to change all"
              value={cardData.name || ""} // Start with an empty string if no name is set
              onChange={handleNameChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
