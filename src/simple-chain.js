const chainMaker = {
  arr:[],
  string:"",
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    value === undefined ? this.arr.push('()'):this.arr.push('( '+value+' )');
    return this;
  },
  removeLink(position) {
    if(position <= 0 || (position ^ 0) != position || position > this.arr.length) {
    this.arr=[];
    throw new Error("invalid position");
    }
    this.arr.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    this.string = this.arr.join('~~');
    this.arr=[];
    return this.string;
  }
};

module.exports = chainMaker;
