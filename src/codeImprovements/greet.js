//improve the following function
/**
 * function greet(name) {
  if (name) {
    return "Hello, " + name + "!";
  } else {
    return "Hello!";
  }
}
 */
function greet(name){
    return name? `Hello, ${name}!`: `Hello!`
}