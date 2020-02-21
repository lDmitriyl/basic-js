module.exports = class DepthCalculator {

    calculateDepth(arr) {
    if (!Array.isArray(arr))
     return 0;
    let Depth = 0;
    arr.forEach(item => Depth = Math.max(Depth, this.calculateDepth(item)));
    return ++Depth;
  }
};