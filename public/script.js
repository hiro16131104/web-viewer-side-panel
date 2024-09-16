function displayWebSite() {
  const textboxUrl = document.getElementById("textboxUrl");
  const iframeWebSite = document.getElementById("iframeWebSite");

  iframeWebSite.src = textboxUrl.value;
  textboxUrl.value = "";
}

function handleButtonClick() {
  displayWebSite();
}

function handleTextboxKeydown(event) {
  if (event.key !== "Enter") return;

  displayWebSite();
}

function handleWindowLoad() {
  const buttonDisplay = document.getElementById("buttonDisplay");
  const textboxUrl = document.getElementById("textboxUrl");

  buttonDisplay.addEventListener("click", displayWebSite);
  textboxUrl.addEventListener("keydown", handleTextboxKeydown);
}

window.addEventListener("load", handleWindowLoad);
