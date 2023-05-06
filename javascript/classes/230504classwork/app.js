const input = document.querySelector("#input");
const resultText = document.querySelector("#resultText");
const unit = document.querySelector("#unitSelector");



const convertUnit = () => {
    result = "";
    switch (unit.value) {
        case "lbs2kg":
            result = `${input.value} lbs equals ${(input.value / 2.2).toFixed(2)} kg`;
            break;
        case "kg2lbs":
            result = `${input.value} kg equals ${(input.value * 2.2).toFixed(2)} lbs`;
            break;
    }
    resultText.textContent = result
}