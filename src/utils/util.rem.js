var setRem = function (pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
  }
  
  module.exports = {
    setRem: setRem
  };