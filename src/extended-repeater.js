module.exports = function repeater(str, options) {
    let array=[];
    let string=String(str);
    let obj=options;
    if(obj.addition !== undefined){
    obj.additionSeparator === undefined ? obj.additionSeparator="|":"";
    if(obj.additionRepeatTimes !== undefined){
      for(let i = 0; i < obj.additionRepeatTimes ; i++){
        array.push(String(obj.addition));
      }
    }else{
      array.push(String(obj.addition));
    }
    string=String(str)+array.join(obj.additionSeparator)
  }
    array=[];
    obj.separator === undefined ? obj.separator="+":"";
    if(obj.repeatTimes !== undefined){
      for(let i = 0; i < obj.repeatTimes ; i++){
        array.push(string);
      }
    }else{
      array.push(string);
    }
      return array.join(obj.separator);
};
  