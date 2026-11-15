window.kiteFatal = function (m) {
  document.getElementById("loading").hidden = true;
  document.getElementById("failure").hidden = false;
  document.getElementById("errorText").textContent = m;
};
window.addEventListener("error", function (e) {
  if (window.kiteReady && typeof save === "function") save();
  kiteFatal(
    "The adventure could not run. Please use a browser with WebGL enabled. " +
      e.message,
  );
});
