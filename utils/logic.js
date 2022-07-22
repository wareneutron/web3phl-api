
/* @desc function for using xor
 * @param {boolean} a
 * @param {boolean} b
 */
const xor = (a, b) => {
  return (!(a && b)) && (!(!a && !b));
};

module.exports = {
  xor
}
