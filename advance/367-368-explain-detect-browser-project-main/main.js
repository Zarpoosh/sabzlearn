window.addEventListener("load", () => {
  let userAgent = navigator.userAgent;
  let userBrowser = null;
  if (userAgent.match(/edg/i)) {
    userBrowser = "edge";
  } else if (userAgent.match(/firefox/i)) {
    userBrowser = "firefox";
  } else if (userAgent.match(/opr/i)) {
    userBrowser = "opera";
  } else if (userAgent.match(/chrome/i)) {
    userBrowser = "chrome";
  } else if (userAgent.match(/safari/i)) {
    userBrowser = "safari";
  }

  console.log("your broser", userBrowser);

  let userBrowserImage = document.querySelector(`.${userBrowser}`);

  if (userBrowserImage) {
    userBrowserImage.style.opacity = "1";
  }
});
