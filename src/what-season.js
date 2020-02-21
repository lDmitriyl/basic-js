module.exports = function getSeason(date) {
  if(date == undefined)
      return 'Unable to determine the time of year!';
  if(Object.prototype.toString.call(date) != '[object Date]')
      throw new Error("The date argument is invalid");

    let data = new Date(date.getTime()).getMonth();
    return (data < 2) || (data == 11) ? "winter" : (data < 5) ? "spring" : (data < 8) ? "summer" : "autumn";
};
