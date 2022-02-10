//Problem 1: Coloring a striped pattern
function color_pattern_times(cols) {
  let ans = [cols[0]];
  
  for (let item of cols) {
    if (ans[ans.length - 1] !== item) {
        ans.push(item);
    }
  }
  let out = ans.length - 1 + cols.length * 2;
  return out;
}

console.log("Problem 1 results:");
console.log(color_pattern_times(["Red", "Blue", "Red", "Blue", "Red"]));
console.log(color_pattern_times(["Blue"]));
console.log(color_pattern_times(["Red", "Yellow", "Green", "Blue"]));
console.log(color_pattern_times(["Blue", "Blue", "Blue", "Red", "Red", "Red"]));