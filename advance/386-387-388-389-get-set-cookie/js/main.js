//TODO ===>> Cookies

// login ==> save paasword in cookie

const setCookieBtn = document.querySelector("button");
const getCookieBtn = document.querySelector("#get-cookie");
const removeCookieBtn = document.querySelector("#remove-cookie");

setCookieBtn.addEventListener("click", () => {
  // console.log("cookie");
  console.log(document.cookie);

  //! ==> از سال ۱۹۷۰ به اینور این همه میلی ثانیه میگذره
  const now = new Date();
  // console.log(now.getTime());

  console.log(now);
  let expireDay = now.setTime(now.getTime() + 2 * 24 * 60 * 60 * 1000);
  console.log(now);

  document.cookie = `user-age=20 developer;path=/;expires${now}`;
});

getCookieBtn.addEventListener("click", () => {
  let mainCookieName = prompt("enter the cookie name :)");
  let cookiesArray = document.cookie.split(";");
  let mainCookie = null;

  cookiesArray.some((cookie) => {
    if (cookie.includes(mainCookieName)) {
      mainCookie = cookie.substring(cookie.indexOf("=" + 1));
      return true;
    }
  });

  console.log(mainCookie);
});
removeCookieBtn.addEventListener("click", () => {
  // console.log("removed")
  let mainCookieName = prompt("enter the cookie name");

  let expireDay = now.setTime(now.getTime() - 2 * 24 * 60 * 60 * 1000);
  console.log(now);

  document.cookie = `${mainCookieName}=20 developer;path=/;expires${now}`;
});
