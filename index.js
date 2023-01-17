class Calculator{
    constructor(oldOperationText, nowOperationText){
        this.oldOperationText = oldOperationText
        this.nowOperationText = nowOperationText
        this.clear() 
    }

    clear(){ 
        this.nowOperation = ''
        this.oldOperation = ''
        this.operation = undefined

    }

    delete(){

    }
    useNumber(number){
        this.nowOperation = number

    }
    chooseOperation(operation){

    }
    compute(){

    }
    updateDisplay(){
        this.nowOperationText.innerText = this.nowOperation

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const oldOperationText = document.querySelector('[data-old]')
const nowOperationText = document.querySelector('[data-now]')


const calculator = new Calculator(oldOperationText, nowOperationText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.useNumber(button.innerText)
        calculator.updateDisplay()
    }) 
}) 