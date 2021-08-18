// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
function Factories() {
    var callA = 0;
    var smsA = 0;
    var totalA = 0;
  
    function radioBillTotal(totalD) {
      if (totalD === 'call') {
        callA += 2.75;
      } else if (totalD === 'sms') {
        smsA += 0.75;
      }
  
      totalA = callA + smsA;
    }
  
    function getCalls() {
      return callA;
    }
  
    function getSmss() {
      return smsA;
    }
  
    function getTotalA() {
      return totalA;
    }
  
    return {
      billT: radioBillTotal,
      allC: getCalls,
      allS: getSmss,
      grandT: getTotalA
    }
  
  }
