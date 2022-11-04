import { createContext, useContext, useState } from 'react';


let CalculatorContext = createContext();

let initialState = {
    w1 : { odd : 0, betAmount : 0, returns : 0 },
    x : { odd : 0, betAmount : 0, returns : 0 },
    w2 : { odd : 0, betAmount : 0, returns : 0 },
    totalOdds : 0,
    totalAmount : 0
}

const MyContext = ({ children }) => {

    let [odds, setOdds] = useState(initialState)

    return (
            <CalculatorContext.Provider 
            value={{ odds, setOdds }}
            >
                {children}
            </CalculatorContext.Provider>
    )
}

export const useCalculatorContext = () => {
    return useContext(CalculatorContext);
}


export default MyContext;