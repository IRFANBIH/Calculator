class Calculator{
    constructor(oldOperation, nowOperation){
        this.oldOperation = oldOperation
        this.nowOperation = nowOperation
        this.clear 
    }

    clear(){
        this.nowOperation = ''
        this.oldOperation = ''
        this.operation = undefined

    }

    delete(){

    }
    useNumber(number){

    }
    chooseOperation(operation){

    }
    compute(){

    }
    updateDisplay(){

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const oldOperation = document.querySelector('[data-old]')
const nowOperation = document.querySelector('[data-now]')


const calculator = new Calculator(oldOperation,nowOperation)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.useNumber(button.innerText)
    })
}
])