import Big from 'big.js'

export default function evaluate(nbr1, nbr2 , op){
   switch (op) {
    case '+':
      return Big (nbr1).plus(nbr2).toString()
    case '-': 
      return Big (nbr1).minus(nbr2).toString()
    case '/':
      if (nbr2 === '0') return 'Division By 0'
      return Big (nbr1).div(nbr2).toString()
    case 'x':
      return Big (nbr1).times(nbr2).toString()
    case '%':
      return Big (nbr1).div(100).times(nbr2).toString()
    default:
      break
  }
}