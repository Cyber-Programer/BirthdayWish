import { createContext, useState } from "react";

export const cardContext = createContext()

const CardProvider = ({children})=>{
    const [name, setName] = useState('click to change all')
    const [imgurl, setImgurl] = useState('https://avatars.githubusercontent.com/u/125746506?v=4')


    return (
        <cardContext.Provider value={{name,imgurl,setName,setImgurl}}>
            {children}
        </cardContext.Provider>
    )
}

export default CardProvider