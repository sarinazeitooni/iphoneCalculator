let Container = document.getElementById("number-container");
let clearButton = document.getElementById("clear-button");
let firstNum = "";
let secondNum = "";
let operator = '';
let result = "";
function undefinedCheck(){
    if(firstNum==undefined){
        firstNum="";
    }
};
function clearNum(){
    firstNum = result;
    secondNum = "";
};
function initialData(){
    Container.innerHTML = "0";
};
function Clear(){
    clearButton.innerHTML = "AC";
    Container.innerHTML = "0";
    firstNum = "";
    secondNum = "";
    operator = "";
};
function getOperator(Operator){
    if(secondNum!=""){
        firstNum = Container.innerHTML;
        secondNum ="";
    }
    operator = Operator;
};
function getNum(number){
    clearButton.innerHTML = "C";
    if(operator!=""){
        secondNum+= number;
        Container.innerHTML = secondNum;
    }else{
        firstNum+= number;
        secondNum = "";
        Container.innerHTML = firstNum;
        operator = "";
    }
};
function getResult(){
    firstNum = eval(firstNum);
    secondNum = eval(secondNum);
    switch (operator){
        case "/":
            result = firstNum / secondNum;
            clearNum();
            break;
        case "+":
            result = firstNum + secondNum;
            clearNum();
            break;
        case "-":
            result = firstNum - secondNum;
            clearNum();
            break;
        case "*":
            result = firstNum * secondNum;
            clearNum();
            break;
    };
    if(result==NaN){
        Container.innerHTML== "";
    }else{
        Container.innerHTML = result;
    }
    undefinedCheck();
};
function getResultPercent(){
    firstNum = Container.innerHTML;
    result = firstNum / 100;
    firstNum = result;
    Container.innerHTML = result;
    undefinedCheck();
}
function getResultPlusMinus(){
    firstNum = Container.innerHTML;
    result = firstNum * -1;
    firstNum = result;
    Container.innerHTML = result;
    undefinedCheck();
}