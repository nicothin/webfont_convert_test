var collapseHeaders = document.querySelectorAll('.collapse__header');
console.log(collapseHeaders.length);
for (var i = 0; i < collapseHeaders.length; i++) {
  var collapseHeader = collapseHeaders[i];
  collapseHeader.onclick = function() {
    this.parentNode.classList.toggle('collapse--hidden');
    console.log(this.parentNode);
  };
}
