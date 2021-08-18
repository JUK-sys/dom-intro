// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
function SettingsWithBill() {
    var callB = 0;
    var smsB = 0;
    var totalB = 0;
    var callCost = 0;
    var smsCost = 0;
    var warningB = 0;
    var criticalB = 0;
  
    function billSettings(billSetting) {
  
      if (totalBills() < criticalB) {
        var billItemTypeWithSettings = billSetting;
  
        if (billItemTypeWithSettings === 'call') {
          callB += callCost;
        }
  
        if (billItemTypeWithSettings === 'sms') {
          smsB += smsCost;
        }
      }
    }
  
    //returns
    function getCall() {
      return callB;
    }
  
    function getSms() {
      return smsB;
    }
  
    function getCritical() {
      return criticalB;
    }
  
    function getWarning() {
      return warningB;
    }
  
    function totalBills() {
      return callB + smsB;
    }
  
    //setters
    function setCostCall(value) {
      callCost = parseFloat(value);
    }
  
    function setCostSms(value) {
      smsCost = parseFloat(value);
    }
  
    function setWarning(value) {
      warningB = parseFloat(value);
    }
  
    function setCritical(value) {
      criticalB = parseFloat(value);
    }
  
    return {
      totalBills,
      billSettings,
      setCostCall,
      setCostSms,
      setCritical,
      setWarning,
      getCall,
      getSms,
      getWarning,
      getCritical
    }
  }
  var refFactor = SettingsWithBill();
