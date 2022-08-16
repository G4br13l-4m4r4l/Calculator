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
        //check if it is empty

        if(this.currentOperationText.innerText === ""){
            //change the operation
            if(this.previousOperationText.innerText !== ""){
                this.changeOperation(operation);
            }
            return;
        }

        //getting the values
        let operationValue;
        let previous = +this.previousOperationText.innerText.split(" ")[0];
        let current = this.currentOperationText.innerText;

        switch(operation){
            case "+":
                operationValue = current + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;

            case "-":
                operationValue = current - current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            
            case "*":
                operationValue = current * current;
                this.updateScreen(operationValue, operation, current, previous);
                break;

            case "/":
                operationValue = current / current;
                this.updateScreen(operationValue, operation, current, previous);
                break;

            default:
                return;

        }


    }

    //changing the values
    updateScreen(operationValue = null, operation = null, current = null, previous = null){
        
        if(operationValue === null){
        this.currentOperationText.innerText += this.currentOperation;
        }else{
            //check if its zero
            if(previous ===0){
                operationValue = current;
            }
            //+ current value into the previous

            this.previousOperationText.innerText = `${operationValue} ${operation}`;
            this.currentOperationText.innerText = "";
        }

    }

    //changing the math operations

    changeOperation(operation){

        const mathOperation = ["*", "/", "+", "-"];

        if(!mathOperation.includes(operation)){
            return;
        }
        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
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