module.exports = function reverse (n) {
  let c = Math.abs(n) + "";
    let reverse = "";
    for (let i = c.length - 1; i >= 0; i--) {
        reverse = reverse + c[i];
    }
    return Number(reverse);
}
