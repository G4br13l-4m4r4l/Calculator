const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const button = document.querySelectorAll("#buttons-container button");

class Calculator{

}

//geting the buttons
button.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        const value = e.target.innerText;

        console.log(value);
    })
});