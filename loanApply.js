/** loanApply.js 
 *   loanApply amount limit
 *    -1 : loanAmount || contractAmount is 0 or less than 0
 *     1 : loanAmount is greater than contractAmount
 *     0 : loanAmount is OK
 **/

exports.loanApplyAmountLimit = function(loanAmount,contractAmount){
    if (loanAmount <= 0 || contractAmount <= 0){
          return -1;
     }

      var ratio = loanAmount / contractAmount;
        if( ratio > 1 ){
              return 1;
        }else{
              return 0;
      }         
}
//exports.loanApplyAmountLimit
//var result=loanApplyAmountLimit(1000,2000);
//console.log("loanApplyAmountLimit(1000,2000)="+result);
