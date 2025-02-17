// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

function Factory(){
    var call = 0;
    var sms = 0;
    var total = 0;
  
    function textBillTotal(totalData) {
      if (totalData === 'call') {
        call += 2.75;
      }
      if (totalData === 'sms') {
        sms += 0.75;
      }
  
      total = call + sms;
    }
  
    function getCall() {
      return call;
    }
  
    function getSms() {
      return sms;
    }
  
    function getTotal() {
      return total;
    }
  
    return {
      billTotals: textBillTotal,
      allCalls: getCall,
      allSms: getSms,
      grandTotal: getTotal
    }
  }