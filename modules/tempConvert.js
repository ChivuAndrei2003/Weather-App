export function convertTemp(value) {
    
    let tempConvertValue;

    if (value == "fahrenheit") {
        tempConvertValue = (value * 9 / 5) + 32;
       
    } else {
       tempConvertValue = (value - 32) * 5 / 9;
    }
    
}