let displayedResult = document.getElementById("displayBox");
let notDisplayedResult = "";


let calculate = (operation) => {
    
    const operators = "%/*+-.";

    console.log(notDisplayedResult);

    if (notDisplayedResult.length == 0) {
        notDisplayedResult += displayedResult.value + operation;
    } else if (operators.includes(notDisplayedResult.charAt(notDisplayedResult.length - 1))) {
        notDisplayedResult = notDisplayedResult.slice(0, -2) + operation;
    } else {
        notDisplayedResult += operation;
    }

    displayedResult.value = "";
    console.log(notDisplayedResult);
}

let addNumber = (num) => {
    displayedResult.value += String(num);
}

let resetValue = () => {
    displayedResult.value = "";
    displayedResult.placeholder = "0";
    notDisplayedResult = "";
}

let delLast = () => {
    displayedResult.value = displayedResult.value.slice(0, -1);
}

let Result = () => {
    notDisplayedResult += displayedResult.value;

    let res = String(eval(notDisplayedResult));

    notDisplayedResult = res;

    displayedResult.value = res;

    displayedResult.placeholder = res;
}


let sideBox = document.getElementById("btn");

sideBox.addEventListener("click", 
() => {
    if (sideBox.classList.contains("active")) {
        sideBox.classList.remove("active");
        document.getElementById("roller").classList.remove("boxActive");
    } else {
        sideBox.classList.add("active");
        document.getElementById("roller").classList.add("boxActive");
    }
});
