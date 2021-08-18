//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button


//Logic function
function totalPhoneBill(totalData) {
    var data = totalData.split(',');
    var total = 0;
    for (var i = 0; i < data.length; i++) {
  
      if (data[i] === 'call') {
        total += 2.75;
        console.log(total);
      } else if (data[i] === 'sms') {
        total += 0.75;
        console.log(total);
      }
    }
    return total.toFixed(2);
  }