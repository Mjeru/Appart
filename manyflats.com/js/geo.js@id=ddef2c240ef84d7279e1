"use strict";

$(document).ready(function () {
  document.querySelector("#localsearch").onchange = function (e) {
    if (typeof navigator.geolocation != "undefined" && e.target.checked) {
      navigator.geolocation.getCurrentPosition(granted);
    }
  };

  document.querySelector("#searchProof").onchange = function (e) {
    if (typeof navigator.geolocation != "undefined" && e.target.checked) {
      navigator.geolocation.getCurrentPosition(granted2);
    }
  };

  function granted(position) {
    document.forms[0].elements.la.value = position.coords.latitude;
    document.forms[0].elements.lo.value = position.coords.longitude;
    $("#la").val(position.coords.latitude);
    $("#lo").val(position.coords.longitude);
    var href = $("a#near").attr("href");
    $("#near").attr("href", href + "&la=" + position.coords.latitude + "&lo=" + position.coords.longitude);
  }

  function granted2(position) {
    document.forms[1].elements.la.value = position.coords.latitude;
    document.forms[1].elements.lo.value = position.coords.longitude;
    $("#lafilt").val(position.coords.latitude);
    $("#lofilt").val(position.coords.longitude);
    var href = $("a#near").attr("href");
    $("#near").attr("href", href + "&la=" + position.coords.latitude + "&lo=" + position.coords.longitude);
  }
});"use strict";

$(document).ready(function () {
  document.querySelector("#localsearch").onchange = function (e) {
    if (typeof navigator.geolocation != "undefined" && e.target.checked) {
      navigator.geolocation.getCurrentPosition(granted);
    }
  };

  document.querySelector("#searchProof").onchange = function (e) {
    if (typeof navigator.geolocation != "undefined" && e.target.checked) {
      navigator.geolocation.getCurrentPosition(granted2);
    }
  };

  function granted(position) {
    document.forms[0].elements.la.value = position.coords.latitude;
    document.forms[0].elements.lo.value = position.coords.longitude;
    $("#la").val(position.coords.latitude);
    $("#lo").val(position.coords.longitude);
    var href = $("a#near").attr("href");
    $("#near").attr("href", href + "&la=" + position.coords.latitude + "&lo=" + position.coords.longitude);
  }

  function granted2(position) {
    document.forms[1].elements.la.value = position.coords.latitude;
    document.forms[1].elements.lo.value = position.coords.longitude;
    $("#lafilt").val(position.coords.latitude);
    $("#lofilt").val(position.coords.longitude);
    var href = $("a#near").attr("href");
    $("#near").attr("href", href + "&la=" + position.coords.latitude + "&lo=" + position.coords.longitude);
  }
});