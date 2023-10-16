/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  let count = 0
  if(password===null)return 0
  if (typeof password !== "string") password = String(password);
  let matched = password.match(/([a-zA-Z0-9])\1+/gi)
  if(!matched)return 0
  for(let group of matched){
    if (group.length===2)count+=1
    if (group.length>=3)count+=2
  }
  return count

}
