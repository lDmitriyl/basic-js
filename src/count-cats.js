module.exports = function countCats(backyard) {
  let number = 0;
for(arr of backyard){
  if(Array.isArray(arr))
    for(item of arr){
      if(item == "^^")
        number++;
    }
}
return number;
};
