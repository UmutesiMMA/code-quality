export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  if(password.length!==10)return false    //less than 10

  if(!password.match(/\w+^[_]/))return false    //happy case

  if(!password.match(/\d+/))return false   //has to have numbers


  if(!password.match(/[a-zA-Z]/))return false     //has to have letters


if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)) return false  // both lower and upper case


  if(forbiddenPasswords.includes(password))return false //at least 4 different characters

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size <=3) return false;                                                         
  return true;
}                                         
