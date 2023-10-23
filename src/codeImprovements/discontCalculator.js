//improve the following function
/**function discount(totalamount) {
    var disc;
    if (totalamount > 100) {
      disc = totalamount * 0.1;
    } else {
      disc = totalamount * 0.05;
    }
    return disc;
  } */

  function discount(totalAmount){
    return totalAmount>100? totalAmount *0.1: totalAmount * 0.05
  }
