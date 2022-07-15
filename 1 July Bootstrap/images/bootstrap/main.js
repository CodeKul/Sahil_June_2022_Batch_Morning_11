console.log("This is main.js file");

var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
  document.querySelector(".header").style.height = window.innerHeight + "px";
})