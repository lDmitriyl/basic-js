module.exports = function transform(arr) {
    let array=[];
    arr.forEach((item, ind, massiv) =>{
    if(item == '--double-prev'){
      if(massiv[ind-1] != undefined)
        array.push(massiv[ind-1]);
    }else if (item == '--double-next') {
      if(massiv[ind+1] != undefined)
        array.push(massiv[ind+1]); 
    }else if (item == '--discard-prev'){
      if(array.length != 0)
        array.pop()  
    }else if (item == '--discard-next'){
      item;
    }else if(massiv[ind-1] == '--discard-next'){
      item;
    }else{
      array.push(item);
    }
    })
    return array;
};
