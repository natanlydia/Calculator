const displayElement = document.getElementById('display');


function appendToDisplay(value){
   if (displayElement.value === '0'){
    displayElement.value = value;
   } else {
    displayElement.value +=  value;
   }
    
}

function clearDisplay(){
    displayElement.value = '0';
}

function calculateResult(){
    try{
        const result = eval(displayElement.value.replace('x', '*'));
        displayElement.value = result;
    } catch(error){
        displayElement.value = 'Error';
    }
}