function displayWebSite() {
  const textboxUrl = document.getElementById("textboxUrl");
  const iframeWebSite = document.getElementById("iframeWebSite");

  iframeWebSite.src = textboxUrl.value;
}

const buttonDisplay = document.getElementById("buttonDisplay");
buttonDisplay.addEventListener("click", displayWebSite);
