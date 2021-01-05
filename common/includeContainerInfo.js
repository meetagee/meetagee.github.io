var infoName = document.currentScript.getAttribute("infoName");
var infoDate = document.currentScript.getAttribute("infoDate");
var infoLocation = document.currentScript.getAttribute("infoLocation");

document.write("<h3><span class=\"glyphicon glyphicon-menu-right\"><\/span> " + infoName + "<\/h3>");
document.write("<h3><span class=\"glyphicon glyphicon-time\"><\/span> " + infoDate);
document.write("<br>");
document.write("<span class=\"glyphicon glyphicon-map-marker\"><\/span> " + infoLocation + "<\/h3>");
