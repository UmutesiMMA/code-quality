//Calculate sum of array elements
function sum(array) {
  if (array.length < 1) return 0;
  return array[0] + sum(array.slice(1));
}
