function find_average(array) {
  let avg = 0;
  array.map(x => avg += x);
  return (avg/array.length);
}
