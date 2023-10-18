/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  if(password===null)return 0

  if (typeof password !== "string") password = String(password);

  //checking for double or more consecutive letters
  const matchedGroups = password.match(/([a-zA-Z0-9])\1+/gi)
  if(!matchedGroups)return 0

  let count = 0
  for(let group of matchedGroups){
    group >2 ? count+=2 : count+=1
  }
  return count
}
