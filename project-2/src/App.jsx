import { useState } from "react";

const App = () => {
    const [ Color, setColor] = useState('')
    const [colorName, setColorName] = useState('')
    const  handleChange = (e) =>{
        setColor(e.target.value)
            setColorName(e.target.value)
        }

    return(
        <div className="flex justify-center items-center w-full h-screen"style={{backgroundColor: `${Color}`}}>
            <input type="text" 
            value={Color} 
            onChange={handleChange} 
            placeholder="Enter a color code" 
            className="mr-2 px-3 py-2 border rounded-full focus:outline-none focus:border-blue-500 shadow-lg"/>
            <input 
                    type='color' 
                    value={Color} 
                    onChange={handleChange}
                    className="justify-center shadow-lg p-3"
                />
                {colorName && (
                    <h1 className="text-black font-bold bg-white rounded-full shadow-lg p-4">your selected  color is :  {colorName}</h1>
                )}


        </div>

    )
}

export default App