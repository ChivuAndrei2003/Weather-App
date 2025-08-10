import { TEMP, switchBtn } from "./dom.js";


export function convertTemp(tempUnit, tempValue) {
    
    if (tempUnit === "fahrenheit") {
       return tempValue = (tempValue * 9 / 5) + 32;
       
    } else {
       return tempValue = (tempValue - 32) * 5 / 9;
    }
    
}