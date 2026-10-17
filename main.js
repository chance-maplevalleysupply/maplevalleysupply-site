(function () {
  var btn = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("cf-status");
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var v = function (id) { return document.getElementById(id).value.trim(); };
      var subject = v("cf-topic") + " | " + v("cf-company");
      var body = "Name: " + v("cf-name") + "\nCompany: " + v("cf-company") + "\nEmail: " + v("cf-email") +
        (v("cf-site") ? "\nWebsite: " + v("cf-site") : "") + "\n\n" + v("cf-msg");
      window.location.href = "mailto:chance@maplevalleysupply.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      status.textContent = "Your email app should open with the message ready to send. If it doesn't, email chance@maplevalleysupply.com directly.";
      status.hidden = false;
    });
  }
})();
