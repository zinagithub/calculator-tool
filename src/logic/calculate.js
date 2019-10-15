import evaluate from './operate';

function changeSign(nbr){
  const arr = nbr.split('')
  if (arr[0] === '-') {
    arr.shift()
  } else {
    arr.unshift('-')
  }
  return arr.join('')
}
function concatElm(nbr1, nbr2){
    return nbr1.concat(nbr2)
}

function Calculate ({ total, next, operation, displayResult }, buttonName) {
	switch (buttonName){
		case 'AC':
		           total = '0'
               next = '0'
               operation = ''
               displayResult =true; 
               break
        case '=':
               if (['+','-','/','x','%'].indexOf(operation) !== -1){
               	  total = evaluate(total, next, operation);
               	  displayResult = true;
               }
               
               break
        case '+/-': 
               next = changeSign(next);
               displayResult = true;
               break
        case '/':
        case 'x':
        case '-':
        case '+':
        case '%':
               total = next;
               operation = buttonName;
               next = '0';
               break
        case '.':
               if (next.split('').indexOf('.') === -1) {
               	 next = concatElm(next, buttonName);
               	 displayResult = true;
               }
               break;       
        default:
               next = concatElm(next, buttonName);
               displayResult = true;
               break
	}
      return { total, next, operation, displayResult}
}
export default Calculate;