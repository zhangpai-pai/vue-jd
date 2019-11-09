function resetRootFZ(){
  var oHtml = document.querySelector('html');
  var w = oHtml.getBoundingClientRect().width;
  oHtml.style.fontSize = w/10 + 'px';
};

resetRootFZ();

window.addEventListener('resize',function(){
  resetRootFZ();
});
