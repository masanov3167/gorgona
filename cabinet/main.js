function copytext() {
    var copyText = document.querySelector(".cabinet__item__body");
  
    navigator.clipboard.writeText(copyText.innerHTML.split('<button onclick="copytext()"')[0]);
  
    alert("Copied the text: " + copyText.innerHTML.split('<button onclick="copytext()"')[0]);
  }