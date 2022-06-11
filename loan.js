let creditLimit = 0;

/*
 * Input: number of dollars to loan out
 * Returns: Promise of loan which may or may not fulfill, based on remaining credit.
 * If creditLimit is less than the requested amount, only the remaining limit is loaned out,
 * otherwise the full amount is loaned out. If $0 remain in the limit, the loan request is rejected (error!).
 */
const loanOut = function(amount) {
  return new Promise((resolve, reject) => {
    if (creditLimit <= 0) {
      reject("insufficient funds in the account");
    } else if (creditLimit - amount > 0) {
      creditLimit -= amount;
      resolve(amount);
    } else {
      resolve(creditLimit);
      creditLimit = 0;
    }
  });
};


console.log("Asking for $150, which should be okay ...");
loanOut(5001)
  //msg will pass to then is the promise get resolve
  .then((amountReceived) => {
    console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
  })
  //
  .catch((err) => {
    console.log(`\t-> Error: ${err}!`);
  });