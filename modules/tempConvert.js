export function convertTemp(tempUnit , tempValue) {
    
    if (tempUnit === "fahrenheit") {
        tempValue = (tempValue * 9 / 5) + 32;
       
    } else {
       tempValue = (tempValue - 32) * 5 / 9;
    }
    return tempConvertValue;
}