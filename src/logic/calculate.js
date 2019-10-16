import evaluate from './operate';

function changeSign(nbr){
  const arr = nbr.split('')
  if (nbr !== '0' ) {
    if (arr[0] === '-') {
      arr.shift()
    } else {
      arr.unshift('-')
    }
  }
  return arr.join('')
}
function concatElm(nbr1, nbr2){
    const arr = nbr1.concat(nbr2).split('');
    if (arr[0] === '0' && arr.length > 1 && arr.indexOf('.')=== -1) {
        arr.shift();
    }
    return arr.join('');
}

function Calculate ({ total, next, operation, displayResult}, buttonName) {
	switch (buttonName.name){
		case 'AC':
		           total = '0'
               next = '0'
               operation = '';
               displayResult = false;
               break
        case '=':
               if (['+','-','/','x'].indexOf(operation) !== -1 && !displayResult){
               	  total = evaluate(total, next, operation);
                  displayResult = true;
                  operation = '';
                  next = total;
               }
               
               break
        case '+/-': 
               if (total !== 'Division By 0'){
                 next = changeSign(next);
                 displayResult = false;
               }
               
               break
        case '%':
               if (total !== 'Division By 0'){
                 next = evaluate(next,1, buttonName.name);
                 displayResult = false;
                } 
               break;       
        case '/':
        case 'x':
        case '-':
        case '+':
        
               if (operation !== '' ){
                  total = evaluate(total, next, operation)
               }else{
                  total = next;
               }
               displayResult = true;
               next = buttonName.name;
               operation = buttonName.name;
               break
        case '.':
               if (next.split('').indexOf('.') === -1) {
               	 next = next.concat(buttonName.name);
                 displayResult = false;
               }
               break;       
        default:
               if (total === 'Division By 0'){
                 total = 0;
                }
               if (displayResult){
                  next = '0';
                  displayResult = false;
               }
               next = concatElm(next, buttonName.name);
               break
	}
      return { total, next, operation, displayResult}
}
export default Calculate;