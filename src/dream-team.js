module.exports = function createDreamTeam(members) {
  let arr=[];
    if(Array.isArray(members)){
    for(item of members){
      if(typeof item == "string")
        arr.push(item.trim().toUpperCase()[0]);
    }
    return arr.length == 0 ? false : arr.sort().join("");
  }
    return false;
};