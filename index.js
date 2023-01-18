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
        this.nowOperation = this.nowOperation.toString().slice(0, -1)

    }
    useNumber(number){
        if (number === '.' && this.nowOperation.includes('.'))
        return
        this.nowOperation = this.nowOperation.toString() + number.toString()

    }
    chooseOperation(operation){
        if(this.nowOperation === '')
        return
        if(this.oldOperation !== '') {
            this.compute()
        }
        
        this.operation = operation
        this.oldOperation = this.nowOperation
        this.nowOperation = ''

    } 
    compute(){
        let completion
        const prev = parseFloat(this.oldOperation)
        const newOp = parseFloat(this.nowOperation)
        if(isNaN(prev) || isNaN(newOp))
        return
        switch (this.operation){
            case '+':
                completion = prev + newOp
                break
             case '-':
                completion = prev - newOp
                break
            case 'x':
                completion = prev * newOp
                 break
            case '÷':
                completion = prev / newOp
                break
            default:
                return
        }
        this.nowOperation = completion
        this.operation = undefined
        this.oldOperation = ''

    }
    updateDisplay(){
        this.nowOperationText.innerText = this.nowOperation
        this.oldOperationText.innerText = this.oldOperation

        
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
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


operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    }) 
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })