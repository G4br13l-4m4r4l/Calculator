const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const button = document.querySelectorAll("#buttons-container button");

class Calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = ""
    }

    //add digit to the calculator screen
    addDigit(numberDigit){

        //checking if has a dot
        if(numberDigit === "." && this.currentOperationText.innerText.includes(".")){
            return;
        }
        this.currentOperation = numberDigit;
        this.updateScreen();
    }

    //process all operations from the calculator
    processOperation(operation){


        //getting the values
        let operationValue;
        let previous = +this.previousOperationText.innerText;
        let current = this.currentOperationText.innerText;

        switch(operation){
            case "+":
                operationValue = current + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            default:
                return;

        }


    }

    //changing the values
    updateScreen(operationValue = null, operation = null, current = null, previous = null){
        this.currentOperationText.innerText += this.currentOperation;
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

//geting the buttons
button.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        const value = e.target.innerText;

        if(+value >= 0 || value === "."){
            calc.addDigit(value);
        }else{
            calc.processOperation(value);
        }
    })
});