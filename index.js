
function calculateTax(income, expenses) {

    if( income < 0 || expenses < 0 ||  income < expenses) {
            return "Invalid Input";

        }


        let taxAmount = income - expenses;

        let tax = taxAmount * 0.20;
        
        return tax;
}



function sendNotification(email) {
  if (email.indexOf('@') === -1){
    return  "Invalid Email" ;
  }

  let parts = email.split('@') ;

  if (parts.length !== 2 || parts[0].length === 0 ||parts[1].length === 0) {
    return "Invalid Email";
  }

  let username = parts[0];
  let domain = parts[1];

  return `${username}  sent you an email from ${domain}`;
}



function checkDigitsInName(name) {
  if (typeof name !== "string"){
    return "Invalid Input"
  }

  for( let i = 0; i < name.length; i++){
    if (!isNaN(name[i]) && name[i] !== " ") {
      return true;
    }
  }  

  return false;
}




function calculateFinalScore(obj) {
 
  if (typeof obj !== 'object' || obj === null) {
    return  "Invalid Input";
  }

  const { name,  testScore, schoolGrade, isFFamily } =obj;

  if (typeof name !== 'string' ||
    typeof testScore !== 'number'||
    typeof schoolGrade !== 'number'||
    typeof isFFamily !== 'boolean'||
    testScore > 50 || schoolGrade > 30 ){
      return "Invalid Input";
    }

    let totalScore = testScore + schoolGrade;

    if (isFFamily) {
      totalScore += 20;
    }
    return  totalScore >=80;
 
}


function  waitingTime(waitingTimes, serialNumber) {
 
  if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
    return "Invalid Input "
  }

  const totalTimes =  waitingTimes.reduce((sum, time) => sum + time, 0);
  const averageTime = Math.round(totalTimes /  waitingTimes.length);

  const remainingPeople =serialNumber -  waitingTimes.length -1;

  const waitingTime =  averageTime * remainingPeople;

  return waitingTime;
}


