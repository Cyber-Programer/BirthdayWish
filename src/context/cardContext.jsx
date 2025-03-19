import { createContext, useState } from "react";

export const cardContext = createContext()

const CardProvider = ({children})=>{
    const [name, setName] = useState('click to change all')
    const [imgurl, setImgurl] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZxHi8puv-4pu0Gg_WFqCbX4xRYgWVTpKGg&s')


    return (
        <cardContext.Provider value={{name,imgurl,setName,setImgurl}}>
            {children}
        </cardContext.Provider>
    )
}

export default CardProvider